import { useMemo } from "react";
import * as d3 from "d3";

import styles from "./BarPlot.module.scss";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

type BarplotProps = {
  width: number;
  height: number;
  data: { name: string; value: number }[];
};

export const BarPlot = ({ width, height, data }: BarplotProps) => {
  // bounds = area inside the graph axis = calculated by subtracting the margins
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  // X axis is for groups since the barplot is vertical
  const groups = data.map((d) => d.name);
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsWidth])
      .padding(BAR_PADDING)
      .paddingOuter(0.2); // Add some outer padding to separate bars from the axis
  }, [data, width]);

  // Y axis
  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d.value));
    return d3
      .scaleLinear()
      .domain([0, max || 10])
      .range([boundsHeight, 0]);
  }, [data, height]);

  // Color scale
  const colorScale = useMemo(() => {
    return d3.scaleOrdinal().domain(groups).range(d3.schemeCategory10);
  }, [groups]);

  // Build the shapes
  const allShapes = data.map((d, i) => {
    const x = xScale(d.name);
    if (x === undefined) {
      return null;
    }

    return (
      <g key={i}>
        <rect
          x={x}
          y={yScale(d.value)}
          width={xScale.bandwidth()}
          height={boundsHeight - yScale(d.value)}
          opacity={0.7}
          stroke="#d3d3d3"
          fill={colorScale(d.name)}
          fillOpacity={0.7}
          strokeWidth={1}
          rx={1}
        />
        <text
          x={x + xScale.bandwidth() / 2}
          y={yScale(d.value) - 7}
          textAnchor="middle"
          alignmentBaseline="baseline"
          fontSize={12}
          opacity={boundsHeight - yScale(d.value) > 20 ? 1 : 0} // hide label if bar is not tall enough
        >
          {d.value}
        </text>
        <text
          x={x + xScale.bandwidth() / 2}
          y={boundsHeight + 10}
          textAnchor="middle"
          alignmentBaseline="hanging"
          fontSize={12}
        >
          {d.name}
        </text>
      </g>
    );
  });

  const grid = yScale
    .ticks(5)
    .slice(1)
    .map((value, i) => (
      <g key={i}>
        <line
          x1={0}
          x2={boundsWidth}
          y1={yScale(value)}
          y2={yScale(value)}
          stroke="#808080"
          opacity={0.2}
        />
        <text
          x={-10}
          y={yScale(value)}
          textAnchor="end"
          alignmentBaseline="middle"
          fontSize={9}
          stroke="#808080"
          opacity={0.8}
        >
          {value}
        </text>
      </g>
    ));

  return (
    <div className={styles.barPlotContainer}>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {grid}
          {allShapes}
        </g>
      </svg>
    </div>
  );
};
