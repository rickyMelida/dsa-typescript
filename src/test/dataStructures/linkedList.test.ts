import { LinkedList } from "../../app/dataStructures/linkedList";

describe("Linked List suite tests", () => {
  it("Should add, remove and print linked lists", () => {
    const list = new LinkedList<number>();
    list.print();
    list.appendToTail(1);
    list.appendToTail(2);
    list.appendToTail(3);
    list.print();
    list.appendToTail(4);
    list.appendToTail(5);
    list.print();
    list.deleteNode(1);
    list.print();

    list.deleteNode(3);
    list.print();

    list.deleteNode(5);
    list.print();
  });
});
