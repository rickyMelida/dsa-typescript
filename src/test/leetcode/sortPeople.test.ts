import { sortPeople } from "../../app/leetcode/sortPeople";

describe("Sort People challenge suit test", () => {
  it("Should return correctly the people sortedly", () => {
    const names = ["Mary", "John", "Emma"];
    const heights = [180, 165, 170];
    const expectResut = ["Mary", "Emma", "John"];

    const actual = sortPeople(names, heights);

    expect(actual).toEqual(expectResut);
  });
});
