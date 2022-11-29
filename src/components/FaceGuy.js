import React from "react";
import { arc } from "d3";

// Change Scale(1-10) to vary the size of emoji
const scale = 10;

const width = scale * 100;
const height = width / 2;
const stroke = width / 100;
const centerXaxis = width / 2;
const centerYaxis = height / 2;
const radius = centerYaxis - stroke / 2;
const smallRadius = radius / 5;
const eyeOffset = width / 10;

// Arc (mouth) with d3
const innerRadius = smallRadius * 2.6;
const outerRadius = smallRadius * 3;
const mouth = arc()
	.innerRadius(innerRadius)
	.outerRadius(outerRadius)
	.startAngle(Math.PI / 2)
	.endAngle((Math.PI * 3) / 2);

const FaceGuy = () => {
	return (
		<div>
			<svg width={width} height={height}>
				{/* a group that moves all the component with it */}
				<g transform={`translate(${centerXaxis},${centerYaxis})`}>
					<circle
						r={radius}
						fill="yellow"
						stroke="black"
						stroke-width={stroke}
					></circle>
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
					<path d={mouth()}></path>
				</g>
			</svg>
		</div>
	);
};

export default FaceGuy;
