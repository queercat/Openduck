import './Board.css'

import { ReactComponent as LightTileSVG } from '../assets/pieces/board squares/square_gray_light.svg';
import { ReactComponent as DarkTileSVG } from '../assets/pieces/board squares/square_brown_dark.svg'

export default function Board() {
	let evenOddLookup = {
		0: "even",
		1: "odd"
	};

	const rows = [];
	for (let row = 0; row < 8; row++) {
		let className = "row ";

		if (row % 2 == 0) {
			className += "row-even";
		} else {
			className += "row-odd";
		}

		const cols = [];
		
		let flip = (row % 2);
		/* 0, 0 is top left */


		for (let col = 0; col < 8; col++) {
			let color = (col + flip);

			if (color % 2 == 0) {
				cols.push(<div key={col} className="tile tile-light"></div>);
			} else {
				cols.push(<div key={col} className="tile tile-dark"></div>);
			}
		} 

		rows.push(
			<div className={className}>
				{cols}
			</div>
		);

	}

	return (
		<div className="board-container">
			{rows}
		</div>
	)
}