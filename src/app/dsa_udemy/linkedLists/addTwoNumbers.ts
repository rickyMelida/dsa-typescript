/**
 * Escribe un algoritmo que realice la suma de dos listas que representan
 * dos enteros positivos. Las listas estan en posicion invertida.
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 5->2->8
 *  Output: 6->4->2->7
 * 6421 + 825 = 7246
 */

import { ListNode } from "../../dataStructures/linkedList";

export const addTwoNumber = (
  list1: ListNode<number> | null,
  list2: ListNode<number> | null
) => {
  const result: ListNode<number> = new ListNode<number>(-1);
  let current: ListNode<number> = result;
  let carry: number = 0;

  while (list1?.value != null || list2?.value != null) {
    current.next = new ListNode(-1);
    current = current.next;
    let digit: number = carry; //current result digit

    if (list1?.value != null) {
      digit += list1.value;
      list1 = list1.next;
    }

    if (list2?.value != null) {
      digit += list2.value;
      list2 = list2.next;
    }

    carry = Math.floor(digit / 10);
    digit = digit % 10;

    current.value = digit;
  }

  if (carry > 0) 
    current.next = new ListNode(carry);

  return result.next;
};
