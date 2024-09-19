/**
 * Dada una lista enlazada simple y un valor N, devuelve el nodo N empezando por el final
 *
 * Ejemplo:
 *  Input: 1->2->4->6, 2
 *  Output: 4
 */

import { ListNode } from "../../dataStructures/linkedList";

export const nthNodeToLast = (head: ListNode<number>, n: number) => {
  let p1: ListNode<number> | null = head;
  let p2: ListNode<number> | null = head;

  // Avanzamos n posiciones con el primer puntero
  for (let i = 0; i < n; i++) {
    if (p1.value === null) {
      return null;
    }
    p1 = p1.next;
  }

  // Avanzamos ambos al mismo ritmo hasta que el puntero avanzado llegue al final
  while (p1.next !== null) {
    p1 = p1.next;
    p2 = p2 ? p2.next : null;
  }

  return p2;
};
