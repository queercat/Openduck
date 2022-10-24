const { default: Board} = require('./Board');
const { default: Pawn } = require('./Piece');
const react = require('react');

let board = new Board();
let pawn = new Pawn();
pawn.board = board;

test('Pawn should have name pawn', () => {
    expect(pawn.name === "Pawn");
});

test('Pawn should not have a position', () => {
    expect(pawn.position === null);
});

pawn.position = [1,1];

test('Pawn should have position [1, 1]', () => {
    expect(pawn.position[0]).toBe(1);
    expect(pawn.position[1]).toBe(1);
});

board.updateSquare(pawn.position, pawn);

test('Board square at [1,1] should have the piece of name pawn', () => {
    expect(board.state[[1,1]].name).toBe("Pawn");
});

test("Algebraic name conversion from [1,1] should yield \"b1\"", () => {
    expect(board.convertCoordinatePositionToAlgebraic(pawn.position)).toBe("b1");
});

test("Legal moves of pawn on an empty board should yield [ [1,2], [1,3] ]", () => {
    expect(pawn.getLegalMoves()).toBe([[1,2], [1,3]]);
});