/**
 * dFen.js
 * loads and handles setting the board state from a particular duck FEN.
 * must i add duck to everything?
 */

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

export default class dFenReader {
    constructor(dFen) {
        this.dFen = dFen;
    
        this.activeColor = "";
        this.castlingRights = "";
        this.enPassantTargetSquare = [];
        this.halfMoveCount = 0;
        this.fullMoveCount = 0;
        this.dFenBoard = {};
    
        if (dFen == typeof("apple") && dFen.length > 0) {
            this.parse(dFen);
        }
    }

    /**
     * @param {string} dFen -- the dFen code
     * @returns {{[x,y]: "piece code",}} 
     */
    parse(dFen) {
        if (dFen == undefined) {
            dFen = this.dFen;
        }

        /* https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation */
        let values = dFen.split(" ");
        
        this.halfMoveCount = parseInt(values[4]);
        this.fullMoveCount = parseInt(values[5]);
        this.enPassantTargetSquare = values[3];
        this.castlingRights = values[2];
        this.activeColor = values[1];

        let ranks = values[0].split("/");
        this.ranksString = ranks;

        let rankIndex = 0;
        let board = [];

        for (let rankIndex = 0; rankIndex < 8; rankIndex++) {
            let row = [];
            for (let charIndex = 0; charIndex < ranks[rankIndex].length; charIndex++) {
                let char = ranks[rankIndex][charIndex];

                if (isNaN(char)) {
                    row.push(char);
                } else {
                    for (let x = 0; x < parseInt(char); x++) {
                        row.push(null);
                    }
                }
            }
            board.push(row);
        }

        this.dFenBoard = board;
        return this.dFenBoard;
    }
}
