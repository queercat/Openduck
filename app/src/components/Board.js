import Pawn from './Piece';
import React, { useState } from 'react';

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
    // composed of a sequence of coordinate moves.
    moves = [];

    initializeBoard() {
        let newState = [];
        
        for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
                
                newState[x, y] = null;
            }
        }

        this.state = newState;
    }

    coordinateInBounds(coordinate) {
        if (coordinate[0] > 7 || coordinate[0] < 0) {
            return false;
        } 

        if (coordinate[1] > 7 || coordinate[1] < 0) {
            return false;
        } 

        return true;
    }

    coordinateOccupied(coordinate) {
        if (this.state[coordinate] != null) {
            return (this.state[coordinate].board === this);
        }

        return false;
    }

    // utilty function to add two [x, y] [x, y] values
    coordinateAdd(addend0, addend1) {
        let newCoordinate = [addend0[0] + addend1[0], addend0[1] + addend1[1]];

        return newCoordinate;
    }

    // set a square to a piece.
    updateSquare(position, piece) {
        let stateCopy = this.state;
        stateCopy[position] = piece;

        this.state = stateCopy;
    }

    // moves a piece based on coordinate position.
    movePiece(oldPosition, newPosition) {
        let stateCopy = this.state;

        stateCopy[newPosition] = stateCopy[oldPosition];
        stateCopy[oldPosition] = null;

        this.state = stateCopy;
    }

    convertCoordinatePositionToAlgebraic(position) {
        let files = ["a", "b", "c", "d", "e", "f", "g", "h"];

        return (files[position[1]] + position[0].toString());
    }

    constructor(props) {
        super(props);

        // composed of an (X, Y) tuple relating to a piece's position. 
        this.state = {}

        this.initializeBoard();
    }

    render() {
        return (
            <div></div>
        )
    }
}