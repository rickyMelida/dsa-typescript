import IsUnique from "../../../app/dsa_udemy/ArraysStringsHashTables/isUnique";

describe("Is unique string suite test", () => {
  it("should return true with a basic and uniques lowercase letters", () => {
    const data = "abcde";
    const actual = IsUnique(data);

    expect(actual).toBe(true);
  });

  it("should return true with uniques lowercase and uppercase letters", () => {
    const data = "aAbBcCdDeE";
    const actual = IsUnique(data);

    expect(actual).toBe(true);
  });

  it("should return false with repeatable strings", () => {
    const data = "abcded";
    const actual = IsUnique(data);

    expect(actual).toBe(false);
  });
});
