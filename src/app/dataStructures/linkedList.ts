/**
 * https://dev.to/glebirovich/typescript-data-structures-linked-list-3o8i
 */
export class ListNode<T> {
  constructor(
    public value: T | null = null,
    public next: ListNode<T> | null = null
  ) {}
}

export class LinkedList<T> {
  public head: ListNode<T> | null = null;

  constructor(n: ListNode<T>) {
    this.head = n ? n : null;
  }

  addLast(value: T) {
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
  }
}
