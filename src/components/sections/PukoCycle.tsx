/**
 * PUKÖ döngüsü — Planla / Uygula / Kontrol Et / Önlem Al.
 *
 * İçerikte metin olarak anlatılan döngüyü teknik bir diyagram olarak
 * gösterir. Ölçüler viewBox üzerinden sabit: merkez (200,200), r=140.
 * Yay uçlarındaki oklar dönüş yönünü, yörüngedeki turuncu işaret
 * döngünün sürekliliğini anlatır.
 */

const STEPS = [
  {
    n: '01',
    label: 'Planla',
    // -130° → -50° (üst yay)
    arc: 'M 110 92.8 A 140 140 0 0 1 290 92.8',
    arrow: { x: 290, y: 92.8, rot: 40 },
    num: { x: 200, y: 30 },
    text: { x: 200, y: 104 },
  },
  {
    n: '02',
    label: 'Uygula',
    // -40° → 40° (sağ yay)
    arc: 'M 307.2 110 A 140 140 0 0 1 307.2 290',
    arrow: { x: 307.2, y: 290, rot: 130 },
    num: { x: 372, y: 205 },
    text: { x: 296, y: 204 },
  },
  {
    n: '03',
    label: 'Kontrol Et',
    // 50° → 130° (alt yay)
    arc: 'M 290 307.2 A 140 140 0 0 1 110 307.2',
    arrow: { x: 110, y: 307.2, rot: 220 },
    num: { x: 200, y: 382 },
    text: { x: 200, y: 306 },
  },
  {
    n: '04',
    label: 'Önlem Al',
    // 140° → 220° (sol yay)
    arc: 'M 92.8 290 A 140 140 0 0 1 92.8 110',
    arrow: { x: 92.8, y: 110, rot: 310 },
    num: { x: 28, y: 205 },
    text: { x: 104, y: 204 },
  },
];

export function PukoCycle() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="PUKÖ döngüsü: Planla, Uygula, Kontrol Et, Önlem Al"
      >
        {/* Ölçü çemberi — teknik çizim referans hattı */}
        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 6"
          className="text-brand-300"
        />

        {STEPS.map((step) => (
          <g key={step.n}>
            <path
              d={step.arc}
              fill="none"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              className="text-brand-600"
            />
            <path
              d="M-5.5,-5.5 L5.5,0 L-5.5,5.5 Z"
              transform={`translate(${step.arrow.x} ${step.arrow.y}) rotate(${step.arrow.rot})`}
              className="fill-accent-400"
            />
            <text
              x={step.num.x}
              y={step.num.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-mono fill-accent-500 text-[13px] tracking-widest"
            >
              {step.n}
            </text>
            <text
              x={step.text.x}
              y={step.text.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-display fill-brand-800 text-[15px] font-semibold"
            >
              {step.label}
            </text>
          </g>
        ))}

        {/* Merkez rozeti — yatay duran "Uygula"/"Önlem Al" etiketleri
            yarıçap boyunca yer kapladığı için dar tutuluyor. */}
        <circle
          cx="200"
          cy="200"
          r="52"
          className="fill-brand-950"
        />
        <text
          x="200"
          y="193"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-display fill-white text-[26px] font-bold tracking-tight"
        >
          PUKÖ
        </text>
        <text
          x="200"
          y="215"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-mono fill-accent-400 text-[9px] tracking-[0.25em]"
        >
          DÖNGÜSÜ
        </text>
      </svg>

      {/* Yörüngede dönen konum işareti — döngünün sürekliliği */}
      <div className="orbit pointer-events-none absolute inset-0">
        <span className="absolute left-1/2 top-[15%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 shadow-[0_0_0_5px_rgba(249,155,28,0.2)]" />
      </div>
    </div>
  );
}
