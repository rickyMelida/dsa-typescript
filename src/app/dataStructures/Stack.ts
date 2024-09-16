import { ListNode } from "./linkedList";

export default class Stack<T> {
  private top: ListNode<T> | null = null;

  push(value: T): void {
    if (this.top == null) 
      this.top = new ListNode<T>(value);

    const newTop: ListNode<T> = new ListNode<T>(value);
    newTop.next = this.top;
    this.top = newTop;
  }

  pop(): T {
    if (this.top == null) 
      throw new Error("The top is empty!");

    const topValue: T = this.top.value;
    this.top = this.top.next;
    return topValue;
  }

  peek(): T {
    if (this.top == null) 
      throw new Error("The top is empty!");

    return this.top.value;
  }

  isEmpty(): boolean {
    return this.top == null;
  }
}
