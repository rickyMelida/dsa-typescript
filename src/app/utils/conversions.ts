import { ListNode } from "../dataStructures/linkedList";

export const arrayToLinkedList = <T>(arr: T[]): ListNode<T> => {
  const linkedList = new ListNode<T>(arr[0]);
  let current = linkedList;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode<T>(arr[i]);
    current = current.next;
  }
  return linkedList;
};

export const linkedListToArray = <T>(linkedList: ListNode<T>) => {
  let result: T[] = [];

  while (linkedList.next) {
    if(linkedList.value)
        result.push(linkedList.value);
    
    linkedList = linkedList.next;
  }

  if (linkedList.value) result.push(linkedList.value);

  return result;
};