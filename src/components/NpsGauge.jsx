import React, { useEffect, useState } from "react";

const NpsGauge = ({ value = 90 }) => {
  const [needleRotation, setNeedleRotation] = useState(0);

  useEffect(() => {
    // Map value (0-100) to rotation (-90 to 90 degrees) for semi-circle
    // 0 -> -90deg, 50 -> 0deg, 100 -> 90deg
    // However, our gauge slices might be laid out differently.
    // Let's assume standard 180 degree gauge.
    // Red: 0-60 degrees (approx 0-33%)
    // Yellow: 60-120 degrees (approx 33-66%)
    // Green: 120-180 degrees (approx 66-100%)

    // Actually, let's map 0-100 score to 0-180 degrees.
    const rotation = (value / 100) * 180;
    setTimeout(() => setNeedleRotation(rotation), 300);
  }, [value]);

  return (
    <div className="nps-gauge-container">
      <svg
        width="120"
        height="70"
        viewBox="0 0 120 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Red Zone (0-33%) */}
        {/* Path for arc: M startX startY A radius radius 0 0 1 endX endY */}
        {/* Center is 60, 60. Radius 50. */}
        {/* Start at 180deg (left). End at 120deg. */}
        {/* We'll use stroke-dasharray for simpler colored segments on a single circle path,
            OR just draw 3 separate paths. 3 paths is easier for explicit start/end control without math heavy calc for dasharray.
        */}

        {/* Background track (optional, but good for empty state) */}

        {/* Red Arc: 180deg to 120deg (using polar coords) or 0 to 60 in gauge terms */}
        <path
          d="M 10 60 A 50 50 0 0 1 35 16.69"
          fill="none"
          stroke="#ef4444" // red-500
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* Yellow Arc: 60 to 120 */}
        <path
          d="M 35 16.69 A 50 50 0 0 1 85 16.69"
          fill="none"
          stroke="#eab308" // yellow-500
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* Green Arc: 120 to 180 */}
        <path
          d="M 85 16.69 A 50 50 0 0 1 110 60"
          fill="none"
          stroke="#22c55e" // green-500
          strokeWidth="12"
          strokeLinecap="butt"
        />

        {/* Needle */}
        {/* Pivot at 60,60. Pointing left initially (-90deg or 0 in gauge logic) */}
        <g
          transform={`translate(60, 60) rotate(${needleRotation - 180})`}
          style={{
            transition: "transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <polygon points="0,-4 0,4 45,0" fill="var(--text-primary)" />
          <circle
            cx="0"
            cy="0"
            r="6"
            fill="var(--bg-color)"
            stroke="var(--text-primary)"
            strokeWidth="2"
          />
        </g>

        {/* Label inside (optional, maybe the score?) */}
      </svg>
      <div className="gauge-label">NPS Alto</div>
    </div>
  );
};

export default NpsGauge;
