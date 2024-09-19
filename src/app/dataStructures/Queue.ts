import { ListNode } from "./linkedList";

export default class Queue<T> {
  private first: ListNode<T> | null = null;
  private last: ListNode<T> | null = null;

  add(value: T): void {
    const newLast: ListNode<T> = new ListNode<T>(value);

    if (this.last != null) 
      this.last.next = newLast;

    this.last = newLast;

    if (this.first == null) 
      this.first = this.last;
  }

  remove(){
    if (this.first == null)
      throw new Error("The queue is empty!");

    const firstValue= this.first.value;
    this.first = this.first.next;

    if (this.first == null) 
      this.last = null;

    return firstValue;
  }

  peek(){
    if (this.first == null) 
      throw new Error("The queue is empty!");

    return this.first.value;
  }

  isEmpty(): boolean {
    return this.first == null;
  }
}
