import Stack from "../../app/dataStructures/Stack"

describe("Stacks suite test", () => {
  it("Should perform all the operations in the row", () => {
    const myStack = new Stack<number>();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.push(4);
    myStack.push(5);

    expect(myStack.peek()).toBe(5);
    expect(myStack.isEmpty()).toBe(false)

  })
})