/**
 * https://dev.to/glebirovich/typescript-data-structures-linked-list-3o8i
 */
export class ListNode<T> {
  public value: T | null;
  public next!: ListNode<T>;

  constructor(value: T | null = null) {
    this.value = value;
  }
}

export class LinkedList<T> {
  public head: ListNode<T> | null = null;

  constructor(n: ListNode<T> | null = null) {
    this.head = n ? n : null;
  }

  appendToTail(value: T) {
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

  deleteNode(value: T) {
    if(!this.head) return;

    if(this.head.value == value){
      this.head = this.head.next;
      return;
    }
    // 4-3-2-1
    let current: ListNode<T> = this.head;
    while(current.next){
      if(current.next.value == value){
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  print() {
    if(!this.head){
      console.log("END");
      return;
    }

    let current: ListNode<T> = this.head;
    while(current.next) {
      console.log(current.value + " -> ");
      current = current.next;
    }
    console.log(current.value + " -> END ");
  }
}
