import { groupAnagrams } from "../../../app/dsa_udemy/ArraysStringsHashTables/groupAnagrams";

describe("Group anagrams suite test", () => {
  it("should return an array of array to anagram from a array words", () => {
    const anagrams = ["saco", "arresto", "programa", "rastreo", "caso"];

    const actual = groupAnagrams(anagrams);

    expect(actual).toEqual([
      ["saco", "caso"],
      ["arresto", "rastreo"],
      ["programa"],
    ]);
    expect(actual).toEqual(
      expect.arrayContaining([
        ["saco", "caso"],
        ["arresto", "rastreo"],
        ["programa"],
      ])
    );
  });

  it("should return an empty array when the input is empty", () => {
    const anagrams: string[] = [];

    const actual = groupAnagrams(anagrams);

    expect(actual).toEqual([]);
  });

  it("should return an array of array to anagram from a array words with repeated words", () => {
    const anagrams = ["saco", "arresto", "programa", "rastreo", "caso", "saco"];

    const actual = groupAnagrams(anagrams);

    expect(actual).toEqual([
      ["saco", "caso", "saco"],
      ["arresto", "rastreo"],
      ["programa"],
    ]);
    expect(actual).toEqual(
      expect.arrayContaining([
        ["saco", "caso", "saco"],
        ["arresto", "rastreo"],
        ["programa"],
      ])
    );
  });

  it("Should return the same length from the expected data", () => {
    const anagrams = ["saco", "arresto", "programa", "rastreo", "caso", "saco"];

    const actual = groupAnagrams(anagrams);

    expect(actual.length).toBe(3);

  })
});
