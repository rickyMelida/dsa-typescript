import { ListNode } from "../../../app/dataStructures/linkedList";
import { mergeTwoSortedLists } from "../../../app/dsa_udemy/linkedLists/mergeTwoSortedLists";

describe("merge two sorted list suite tests", () => {
  it("Should merged and sort two linked list", () => {
    const list1: ListNode<number> = new ListNode<number>(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(4);
    list1.next.next.next = new ListNode(6);

    const list2: ListNode<number> = new ListNode<number>(2);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(5);

    const actual = mergeTwoSortedLists(list1, list2);

    expect(actual?.value).toBe(1);
    expect(actual?.next?.value).toBe(2);
    expect(actual?.next?.next?.value).toBe(2);
    expect(actual?.next?.next?.next?.value).toBe(3);
    expect(actual?.next?.next?.next?.next?.value).toBe(4);
    expect(actual?.next?.next?.next?.next?.next?.value).toBe(5);
    expect(actual?.next?.next?.next?.next?.next?.next?.value).toBe(6);
  });
})