# ─────────────────────────────────────────────────────────────
# Fabrika Doktoru — Next.js 16 (standalone) çok aşamalı Docker imajı
# EasyPanel "Dockerfile" build yöntemi için hazırlanmıştır.
# ─────────────────────────────────────────────────────────────

# 1) Bağımlılıklar
FROM node:22-alpine AS deps
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
WORKDIR /app
# pnpm-workspace.yaml zorunlu: build script izinleri (allowBuilds) orada tanımlı,
# dosya olmadan pnpm install ERR_PNPM_IGNORED_BUILDS ile düşer.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# 2) Build
FROM node:22-alpine AS builder
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# 3) Çalıştırma — minimal standalone sunucu
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# standalone çıktısı + statik dosyalar + public
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
