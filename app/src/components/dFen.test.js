import dFenReader from './dFen';

let reader = new dFenReader();

reader.parse("4k2r/6r1/8/8/8/8/3R4/R3K3 w Qk - 0 1");

let testBoard = [];

testBoard.push([null, null, null, null, "k", null, null, "r"]);
testBoard.push([null, null, null, null, null, null, "r", null]);
testBoard.push([null, null, null, null, null, null, null, null]);
testBoard.push([null, null, null, null, null, null, null, null]);
testBoard.push([null, null, null, null, null, null, null, null]);
testBoard.push([null, null, null, null, null, null, null, null]);
testBoard.push([null, null, null, "R", null, null, null, null]);
testBoard.push(["R", null, null, null, "K", null, null, null]);

test("dFen should parse that there have been 0 half moves.", () => {
    expect(reader.halfMoveCount).toEqual(0);
});

test("dFen should parse that it is white's right to move", () => {
    expect(reader.activeColor).toEqual("w");
});

test("dFen should parse that there has only been 1 move.", () => {
    expect(reader.fullMoveCount).toEqual(1);
});

test("ranks parse should be equivalent to input", () => {
    expect(reader.ranksString).toEqual("4k2r/6r1/8/8/8/8/3R4/R3K3".split("/"));
});

test("dFen should create an equivalent board state", () => {
    expect(reader.dFenBoard).toEqual(testBoard);
});