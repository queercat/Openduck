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
    getValidMoves(board) {
        return [];
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
    }

    getLegalMoves = function() {
        let legalMoves = [];

        // check square ahead legal.
        let isValidAheadSquare;
        let squareAheadCoordinate = this.board.coordinateAdd(this.position, [0, 1 * this.direction]);

        
    
        return legalMoves;
    }
}