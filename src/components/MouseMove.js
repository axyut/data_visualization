import React, { useCallback, useState } from "react";

const width = 1000;
const height = 1000;
const circleRadius = 15;

const MouseMove = () => {
	//State
	const initialCirclePosition = { x: width / 2, y: height / 2 };
	const [mousePosition, setMousePosition] = useState(initialCirclePosition);

	//Functions without useCallback also works, but it is industry standard way because it is efficient as it doesnt call the function everytime mouse moves
	const handleMouseMove = useCallback(
		(event) => {
			const { clientX, clientY } = event;
			setMousePosition({ x: clientX, y: clientY });
		},
		[setMousePosition]
	);

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
