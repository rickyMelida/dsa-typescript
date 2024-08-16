import { zeroMatrix } from "../../../app/dsa_udemy/ArraysStringsHashTables/zeroMatrix";

describe("Zero matrix suite test", () => {
  it("should return a matrix with zeroes in the row and column of the zero", () => {
    const matrix = [
      [2, 1, 3, 0, 2],
      [7, 4, 1, 3, 8],
      [4, 0, 1, 2, 1],
      [9, 3, 4, 1, 9],
    ];

    const expectedMatrix = [
      [0, 0, 0, 0, 0],
      [7, 0, 1, 0, 8],
      [0, 0, 0, 0, 0],
      [9, 0, 4, 0, 9],
    ];

    zeroMatrix(matrix);

    expect(matrix).toEqual(expectedMatrix);
  });

  it("should return a matrix with zeroes in the row and column of the zero, with less nums of rows and columns", () => {
    const matrix = [
      [2, 0, 2],
      [0, 2, 1],
      [9, 3, 4],
    ];

    const expectedMatrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 4],
    ];

    zeroMatrix(matrix);

    expect(matrix).toEqual(expectedMatrix);
  });

});
