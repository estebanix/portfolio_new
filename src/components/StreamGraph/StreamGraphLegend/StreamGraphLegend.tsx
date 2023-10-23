import styles from "./StreamGraphLegend.module.scss";

export function StreamGraphLegend({ colorScale, groups }) {
  const circleRadius = 10;
  const circleSpacing = 10;

  const reversedGroups = [...groups].reverse();

  return (
    <svg className={styles.stremGraphLegend} transform={`translate(0, 10)`}>
      {reversedGroups.map((group, index) => (
        <g key={index} transform={`translate(${index * 150}, 0)`}>
          <circle r={circleRadius} fill={colorScale(group)} cy="20" />
          <text x={circleRadius + circleSpacing} y="20" dy="0.35em">
            {group}
          </text>
        </g>
      ))}
    </svg>
  );
}
