const { default: Board} = require('./Board');
const { default: Pawn } = require('./Piece');
const react = require('react');

let board = new Board();
let pawn = new Pawn();

pawn.board = board;
pawn.color = "White";
pawn.direction = 1;

test('Pawn should have name pawn', () => {
    expect(pawn.name).toBe("Pawn");
});

test('Pawn should not have a position', () => {
    expect(pawn.position).toBe(undefined);
});

test('Pawn should have position [1, 1]', () => {
    pawn.position = [1,1];
    expect(pawn.position).toStrictEqual([1,1]);
});

test('Board square at [1,1] should have the piece of name pawn', () => {
    board.updateSquare(pawn.position, pawn);
    expect(board.state[[1,1]].name).toBe("Pawn");
});

test("Algebraic name conversion from [1,1] should yield \"b1\"", () => {
    expect(board.convertCoordinatePositionToAlgebraic(pawn.position)).toBe("b1");
});

test("Coordinate addition of piece position with [0, 1] should yield [1, 2]", () => {
    expect(board.coordinateAdd(pawn.position, [0, 1])).toStrictEqual([1, 2]);
});

test("Coordinates greater than [7, 7] and less than [0, 0] should not be valid", () => {
    expect(board.coordinateInBounds([8, 0])).toBe(false);
    expect(board.coordinateInBounds([8, 8])).toBe(false);
    expect(board.coordinateInBounds([-1,0])).toBe(false);
    expect(board.coordinateInBounds([-1,-1])).toBe(false);
});

test("Coordinates within [0,0] and [7,7] should be valid", () => {
    expect(board.coordinateInBounds([1,1])).toBe(true);
    expect(board.coordinateInBounds([7,7])).toBe(true);
    expect(board.coordinateInBounds([0,7])).toBe(true);
});

test("Coordinate ahead of [1,1] should be [1,2]", () => {
    expect(pawn.getSquareAhead()).toStrictEqual([1,2]); 
});

test("Board at [1,2] should be a valid square", () => {
    expect(board.coordinateInBounds(pawn.getSquareAhead())).toBe(true);
});

test("Board at [1,1] should be occupied", () => {
    expect(board.coordinateOccupied([1,1])).toBe(true);
});

test("Legal moves of pawn on an empty board should yield [ [1,2], [1,3] ]", () => {
    expect(pawn.getLegalMoves()).toStrictEqual([[1,2], [1,3]]);
});