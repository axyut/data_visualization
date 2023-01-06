import { scaleBand, scaleLinear, max } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const width = 960;
const height = 500;
const margin = { top: 20, right: 20, bottom: 20, left: 200 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.left;
const yValue = (d) => d.Country;
const xValue = (d) => d.Population;

const BarChart = () => {
	const data = useData();

	if (!data) {
		return <pre>Loading...</pre>;
	}

	const yScale = scaleBand().domain(data.map(yValue)).range([0, innerHeight]);
	const xScale = scaleLinear()
		.domain([0, max(data, xValue)])
		.range([0, innerWidth]);

	return (
		<>
			<svg width={width} height={height}>
				<g transform={`translate(${margin.left}, ${margin.top})`}>
					<AxisBottom xScale={xScale} innerHeight={innerHeight} />
					<AxisLeft yScale={yScale} />
					<Marks
						xScale={xScale}
						yScale={yScale}
						data={data}
						xValue={xValue}
						yValue={yValue}
					/>
				</g>
			</svg>
		</>
	);
};

export default BarChart;
