import { ListNode } from "../../app/dataStructures/linkedList";
import addTwoNumbers from "../../app/leetcode/sumTwoNumbers";

describe("Add two numbers suit test", () => {
  let listNode1: ListNode<number>;
  let listNode2: ListNode<number>;

  beforeEach(() => {
    /**
     * [1,4,6]
     * [1,2,3]
     */
    listNode1 = new ListNode<number>(1);
    listNode2 = new ListNode<number>(1);

    for (let i = 2; i < 3; i++) {
      listNode1.addLast(i * 2);
      listNode2.addLast(i);
    }
  });
  xit("should sum correctly two linked list numbers", () => {
    const expectResult = new ListNode<number>(2);
    expectResult.addLast(6);
    expectResult.addLast(9);

    const actual = addTwoNumbers(listNode1, listNode2);

    expect(actual).toEqual(expectResult);
  });
});