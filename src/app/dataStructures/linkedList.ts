/**
 * https://dev.to/glebirovich/typescript-data-structures-linked-list-3o8i
 */
export class ListNode<T> {
  constructor(
    public value: T | null = null,
    public next: ListNode<T> | null = null
  ) {}

  addLast(val: T) {
    const newNode = new ListNode<T>(val);

    if (!this.next) {
      this.next = newNode;
      return;
    }

    let current: ListNode<T> | null = this.next;
    while (current?.next) {
      current = current.next;
    }
    current.next = newNode;
  }
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
