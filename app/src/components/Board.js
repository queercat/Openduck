import Pawn from './Piece';
import React from 'react';

/** BOARD *
 * 0,7
 * 0,6
 * 0,5
 * 0,4
 * 0,3
 * 0,2
 * 0,1
 * 0,0 
 *    0,0 1,0 2,0 3,0 4,0 5,0 6,0 7,0
*/

export default class Board extends React.Component {
    // composed of an (X, Y) tuple relating to a piece's position. 
    state = {};

    initializeBoard() {
        for (let x = 0; x < 8; x++){
            for (let y = 0; y < 8; y++) {
                this.state[[x,y]] = null; 
            }
        }
    }

    // utilty function to add two [x, y] [x, y] values
    coordinateAdd(addend0, addend1) {
        let newCoordinate = [addend0[0] + addend1[0], addend0[1] + addend1[1]];
    }

    // set a square to a piece.
    updateSquare(position, piece) {
        this.state[position] = piece;
    }

    // calculates the valid movement (if is) then updates the board.
    movePiece(piece, newPosition) {
        if ((typeof(piece) == typeof(null) || typeof(piece) == typeof(undefined) && piece.name != "")) {
            console.log("Invalid piece type.");
        } else {
            let validMoves = piece.getValidMoves(this);
        }
    }

    convertCoordinatePositionToAlgebraic(position) {
        let files = ["a", "b", "c", "d", "e", "f", "g", "h"];

        return (files[position[1]] + position[0].toString());
    }

    constructor(props) {
        super(props);

        this.initializeBoard();
    }

    render() {
        return (
            <div></div>
        )
    }
}