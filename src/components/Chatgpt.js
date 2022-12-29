import * as d3 from "d3";
import axios from "axios";

const Chatgpt = async () => {
	const data = await axios.get("../components/data/jsondata.json");
	console.log(data);
	const pie = d3.pie().value((d) => d); // generate pie chart data
	const arc = d3.arc().innerRadius(0).outerRadius(100); // generate arc data

	const svg = d3.select(this.refs.pieChart); // select the container element for the chart
	const g = svg.append("g"); // create a group element to hold the chart

	// create and position the pie chart slices
	g.selectAll("path")
		.data(pie(data))
		.enter()
		.append("path")
		.attr("d", arc)
		.attr("fill", "#00bcd4");

	return (
		<>
			<svg ref="pieChart" width={200} height={200} />
			<div>{data}</div>
		</>
	);
};

export default Chatgpt;
