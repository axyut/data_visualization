export const AxisBottom = ({ xScale, innerHeight }) =>
	xScale.ticks().map((tickValue) => (
		<g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
			<line y2={innerHeight} stroke="black"></line>
			<text style={{ textAnchor: "middle" }} dy="1em" y={innerHeight}>
				{tickValue}
			</text>
		</g>
	));
