import React, { useState } from "react";
import FaceGuy from "./emojis/FaceGuy";
import { range } from "d3";

function Emoji() {
	const faces = range(20);
	const [scale, setScale] = useState(1);

	return (
		<div>
			{faces.map(() => (
				<FaceGuy scale={scale} />
			))}
		</div>
	);
}

export default Emoji;
