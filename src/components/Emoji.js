import React from "react";
import FaceGuy from "./emojis/FaceGuy";
import { range } from "d3";

const faces = range(20);

function Emoji() {
	return (
		<div>
			{faces.map(() => (
				<FaceGuy />
			))}
		</div>
	);
}

export default Emoji;
