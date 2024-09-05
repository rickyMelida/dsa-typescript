import { ListNode } from "../../../app/dataStructures/linkedList";
import { addTwoNumber } from "../../../app/dsa_udemy/linkedLists/addTwoNumbers";

describe("Add two number suite tests", () => {
  it("Should sum two linked list a return his result in a reverse way", ()=> {
    const list1 = new ListNode<number>(1);
    list1.next = new ListNode<number>(2);
    list1.next.next = new ListNode<number>(4);
    list1.next.next.next = new ListNode<number>(6);

    const list2 = new ListNode<number>(5);
    list2.next = new ListNode<number>(2);
    list2.next.next = new ListNode<number>(8);

    const result = addTwoNumber(list1, list2);

    expect(result?.value).toBe(6);
    expect(result?.next?.value).toBe(4);
    expect(result?.next?.next?.value).toBe(2);
    expect(result?.next?.next?.next?.value).toBe(7);
  });
});