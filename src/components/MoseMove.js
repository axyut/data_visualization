import React, { useState } from "react";

const width = 1000;
const height = 1000;
const circleRadius = 15;

const MouseMove = () => {
	//State
	const initialCirclePosition = { x: width / 2, y: height / 2 };
	const [mousePosition, setMousePosition] = useState(initialCirclePosition);

	//Functions
	const handleMouseMove = (event) => {
		const { clientX, clientY } = event;
		setMousePosition({ x: clientX, y: clientY });
	};

	return (
		<>
			<svg width={width} height={height} onMouseMove={handleMouseMove}>
				<circle
					cx={mousePosition.x}
					cy={mousePosition.y}
					r={circleRadius}
				></circle>
			</svg>
		</>
	);
};

export default MouseMove;
