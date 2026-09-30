// Continuously animated trust-lineage network for dark bands. Decorative only
// (aria-hidden), pure SVG + CSS, and it simply sits still if animation is off.
const NODES = [
  [8, 22], [22, 12], [36, 30], [18, 48], [32, 66], [48, 20],
  [54, 46], [68, 30], [62, 70], [78, 16], [86, 44], [92, 66],
  [44, 84], [70, 88], [24, 80],
];
const LINKS: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[6,7],[7,8],[7,9],[9,10],
  [10,11],[8,11],[4,12],[12,13],[8,13],[3,14],[14,12],[6,2],[10,6],
];

export function TrustGraphBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.55]">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <style>{`
          @media (prefers-reduced-motion: no-preference) {
            .tg-link--flow { stroke-dasharray: 4 6; animation: tg-flow 7s linear infinite; }
            @keyframes tg-flow { to { stroke-dashoffset: -20; } }
            .tg-node {
              animation: tg-breathe 6s ease-in-out infinite;
              transform-box: fill-box;
              transform-origin: center;
              will-change: transform, opacity;
            }
            /* transform/opacity only — animating the r attribute would re-run
               SVG layout on every frame. */
            @keyframes tg-breathe {
              0%,100% { transform: scale(0.78); opacity: 0.45; }
              50%     { transform: scale(1.35); opacity: 1; }
            }
          }
        `}</style>
        <g stroke="rgba(120,170,255,0.30)" strokeWidth="0.18">
          {LINKS.map(([a, b], i) => (
            <line
              key={i}
              className={i % 2 === 0 ? "tg-link tg-link--flow" : "tg-link"}
              x1={NODES[a][0]} y1={NODES[a][1]}
              x2={NODES[b][0]} y2={NODES[b][1]}
              style={{ animationDelay: `${(i % 7) * 0.45}s` }}
            />
          ))}
        </g>
        <g>
          {NODES.map(([x, y], i) => (
            <circle
              key={i}
              className="tg-node"
              cx={x} cy={y} r={0.9}
              fill={i % 5 === 0 ? "rgba(244,128,30,0.9)" : "rgba(150,195,255,0.75)"}
              style={{ animationDelay: `${(i % 6) * 0.8}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
