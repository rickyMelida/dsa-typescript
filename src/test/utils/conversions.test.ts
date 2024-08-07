import { ListNode } from "../../app/dataStructures/linkedList";
import {
  arrayToLinkedList,
  linkedListToArray,
} from "../../app/utils/conversions";

describe("Conversions tests suite", () => {
  let listNode: ListNode<number>;

  beforeEach(() => {
    listNode = new ListNode<number>(1);
    listNode.next = new ListNode<number>(2);
    listNode.next.next = new ListNode<number>(3);
    listNode.next.next.next = new ListNode<number>(4);
    listNode.next.next.next.next = new ListNode<number>(5);
  });

  it("should take a array and return an linked list node", () => {
    const arr = [1, 2, 3, 4, 5];
    const expectResult = listNode;

    const actual = arrayToLinkedList(arr);

    expect(actual).toEqual(expectResult);
  });

  it("should take a linked list and return an array", () => {
    const arr = [1, 2, 3, 4, 5];

    const actual = linkedListToArray(listNode);

    expect(actual).toEqual(arr);
  });
});
