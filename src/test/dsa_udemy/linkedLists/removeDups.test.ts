import { ListNode } from "../../../app/dataStructures/linkedList"
import { removeDups } from "../../../app/dsa_udemy/linkedLists/removeDups"

describe("Remove dups suite tests", () => {
  it("Should remove all the elemenets dups", () => {
    const head: ListNode<number> = new ListNode<number>(1);
    head.next = new ListNode<number>(2);
    head.next.next = new ListNode<number>(2);
    head.next.next.next = new ListNode<number>(3);
    head.next.next.next.next = new ListNode<number>(4);
    head.next.next.next.next.next = new ListNode<number>(1);

    removeDups<number>(head);
    
    expect(head.value).toBe(1);
    expect(head.next.value).toBe(2);
    expect(head.next.next.value).toBe(3);
    expect(head.next.next.next.value).toBe(4);
    expect(head.next.next.next.next).toBeNull();
  })
})