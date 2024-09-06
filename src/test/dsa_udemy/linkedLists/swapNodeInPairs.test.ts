import { ListNode } from "../../../app/dataStructures/linkedList"
import { swapNodeInPairs } from "../../../app/dsa_udemy/linkedLists/swapNodeInPairs";

describe("swap node in pairs suite test", () => {
  it("should swap node in pairs", () => {
    const list = new ListNode<number>(1);
    list.next = new ListNode<number>(2);
    list.next.next = new ListNode<number>(4);
    list.next.next.next = new ListNode<number>(6);
    list.next.next.next.next = new ListNode<number>(8);

    const actual = swapNodeInPairs(list);

    expect(actual?.value).toBe(2);
    expect(actual?.next?.value).toBe(1);
    expect(actual?.next?.next?.value).toBe(6);
    expect(actual?.next?.next?.next?.value).toBe(4);
    expect(actual?.next?.next?.next?.next.value).toBe(8);
  })
})