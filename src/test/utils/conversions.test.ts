import { ListNode } from "../../app/dataStructures/linkedList";
import {
  arrayToLinkedList,
  linkedListToArray,
} from "../../app/utils/conversions";

describe.skip("Conversions tests suite", () => {
  let listNode: ListNode<number>;

  /*beforeEach(() => {
    listNode = new ListNode<number>(1);
    for (let i = 2; i <= 5; i++)
      listNode.addLast(i);
  });*/

  it("should take a array and return an linked list node", () => {
    const arr = [1, 2, 3, 4, 5];
    const expectResult = listNode;

    const actual = arrayToLinkedList(arr);

    expect({}).toEqual({});
  });

  it("should take a linked list and return an array", () => {
    const arr = [1, 2, 3, 4, 5];

    const actual = linkedListToArray(listNode);

    expect({}).toEqual({});
  });
});
