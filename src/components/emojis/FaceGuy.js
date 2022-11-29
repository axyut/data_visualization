import React from "react";
import { arc } from "d3";

function FaceGuy() {
	let scale = 3;

	const width = scale * 100;
	const height = width / 2;

	const stroke = width / 100;
	const centerXaxis = width / 2;
	const centerYaxis = height / 2;
	const radius = centerYaxis - stroke / 2;
	const smallRadius = radius / 5;
	const eyeOffset = width / 10;
	const innerRadius = smallRadius * 2.6;
	const outerRadius = smallRadius * 3;

	const Container = ({ children }) => (
		<svg width={width} height={height}>
			{/* a group that moves all the component with it */}
			<g transform={`translate(${centerXaxis},${centerYaxis})`}>
				{children}
			</g>
		</svg>
	);

	const OuterFace = () => (
		<circle
			r={radius}
			fill="yellow"
			stroke="black"
			stroke-width={stroke}
		></circle>
	);
	const Eyes = () => (
		<>
			<circle
				cx={-eyeOffset}
				cy={-eyeOffset}
				r={smallRadius}
				fill="black"
			></circle>
			<circle
				cx={+eyeOffset}
				cy={-eyeOffset}
				r={smallRadius}
				fill="black"
			></circle>
		</>
	);

	const Mouth = () => {
		const mouth = arc()
			.innerRadius(innerRadius)
			.outerRadius(outerRadius)
			.startAngle(Math.PI / 2)
			.endAngle((Math.PI * 3) / 2);

		return <path d={mouth()}></path>;
	};
	return (
		<>
			<Container>
				<OuterFace />
				<Eyes />
				<Mouth />
			</Container>
		</>
	);
}

export default FaceGuy;
