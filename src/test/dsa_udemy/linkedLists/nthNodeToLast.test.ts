import { ListNode } from "../../../app/dataStructures/linkedList"
import { nthNodeToLast } from "../../../app/dsa_udemy/linkedLists/nthNodeToLast";

describe("Nth Node to last suite test", () => {
  it("should return the value in based to the end correct position", () => {
    
    const list: ListNode<number> = new ListNode<number>(1);
    list.next = new ListNode<number>(2);
    list.next.next = new ListNode<number>(4);
    list.next.next.next = new ListNode<number>(6);
    
    expect(nthNodeToLast(list, 1)).toBe(6);
    expect(nthNodeToLast(list, 2)).toBe(4);
    expect(nthNodeToLast(list, 3)).toBe(2);
    expect(nthNodeToLast(list, 4)).toBe(1);
    expect(nthNodeToLast(list, 5)).toBeNull();
    
  })
})