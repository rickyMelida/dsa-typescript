import { insertionSort } from "../../app/algorithms/insertionSort";

describe("insertionSort algorithm test suit", () => {
  it("should sorted ascending correctly ", () => {
    const unsortedData = [2, 8, 3, 1, 9, 7, 6];
    const expectResut = [1, 2, 3, 6, 7, 8, 9];

    const actual = insertionSort(unsortedData, "asc");

    expect(actual).toEqual(expectResut);
  });

  it("should sorted descending correctly ", () => {
    const unsortedData = [2, 8, 3, 1, 9, 7, 6, 5];
    const expectResut = [9, 8, 7, 6, 5, 3, 2, 1];

    const actual = insertionSort(unsortedData, "desc");

    expect(actual).toEqual(expectResut);
  });

  it("should sorted ascending correctly without the second params ", () => {
    const unsortedData = [2, 8, 3, 1, 9, 7, 6, 5, 4];
    const expectResut = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const actual = insertionSort(unsortedData);

    expect(actual).toEqual(expectResut);
  });
});
