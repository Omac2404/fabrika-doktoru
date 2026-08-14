import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/** Programatik favicon — marka renginde "FD" monogramı. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          fontWeight: 800,
          background: '#1e4983',
          color: '#fff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          letterSpacing: -1,
        }}
      >
        FD
      </div>
    ),
    { ...size },
  );
}
