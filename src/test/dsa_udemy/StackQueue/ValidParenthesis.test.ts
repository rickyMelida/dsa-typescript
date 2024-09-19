import { validParenthesis } from "../../../app/dsa_udemy/StacksQueues/ValidParenthesis"

describe("Valid parenthesis with stack suite test", () => {
  const invalidPairOfParenthesis = "({)}";
  const validPairOfParenthesis = "([]){}";

  it("Should validate the corret order for the parenthesis", () => {
    const actualValid = validParenthesis(validPairOfParenthesis);

    expect(actualValid).toBe(true);
  });

  it("Should validate the incorret order for the parenthesis", () => {
    const actualValid = validParenthesis(invalidPairOfParenthesis);

    expect(actualValid).toBe(false);
  });
})