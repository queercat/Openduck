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

class Piece {
    constructor(name, position, color, board) {
        this.name = name;
        this.color = color;
        this.board = board;

        this.position = position;
    }

    setPosition(position) {
        this.position = position;
    }

    getPosition() {
        return this.position;
    }

    /**
     * must be overridden
     */
    getValidMoves() {
        return [];
    }

    getSquareAhead() {
        return this.board.coordinateAdd(this.position, [0, 1 * this.direction]);
    }

    /***
     * TODO: Implement checking to see if a move would cause an opponent piece to attack the king.
     * Probably iterate over all opposite color pieces and check if could move onto king.
     * Duck chess doesn't actually have this feature.
     */
    checkMoveCheck(newCoordinate) {
        return false;
    }

    move(newCoordinate) {

    }
}

export default class Pawn extends Piece {
    constructor(position) {
        super("Pawn", position);

        /* pawns are the only piece that matter the color */
        if (this.color == "White") {
            this.direction = 1;
        } else {
            this.direction = -1;
        }

        this.hasMoved = false;
    }

    

    getLegalMoves = function() {
        let legalMoves = [];

        // check square ahead legal.
        let isValidAheadSquare;
        let squareAheadCoordinate = this.getSquareAhead();

        isValidAheadSquare = this.board.coordinateInBounds(squareAheadCoordinate);
        
        let squareAheadAheadCoordinate = this.board.coordinateAdd(squareAheadCoordinate, [0, 1]);
        let isValidAheadAheadSquare = this.board.coordinateInBounds(squareAheadAheadCoordinate);

        /**
         * Could be refactored to follow these three simple steps.
         * Check move ahead valid tile.
         * Check if that tile is occupied.
         */
        if (isValidAheadSquare) {
            // move 1
            if (!this.board.coordinateOccupied(squareAheadCoordinate)) {
                legalMoves.push(squareAheadCoordinate);
            }

            if (!this.hasMoved) {
                // move 2
                if (isValidAheadAheadSquare) {
                    if (!this.board.coordinateOccupied(squareAheadAheadCoordinate)) {
                        legalMoves.push(squareAheadAheadCoordinate);
                    }
                }

                // en passant
            }
        }

        return legalMoves;
    }
}