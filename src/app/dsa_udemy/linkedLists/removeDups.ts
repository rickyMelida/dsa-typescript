/**
 * Escribe un algoritmo para eliminar los elementos duplicados en una lista enlazada
 *
 * Ejemplo:
 *  input:  1->2->2->3->4->1
 *  output: 1->2->3->4
 *
 * O(N)
 *
 * Follow-up: ¿Cual seria tu solucion si no pudieras utilizar memoria adicional?
 */

import { ListNode } from "../../dataStructures/linkedList";

export const removeDups = <T>(head: ListNode<T>) => {
  if (!head) return;

  const foundValues: Set<T> = new Set();
  let current: ListNode<T> = head;

  if (current.value) 
    foundValues.add(current.value);

  while (current.value && current.next?.value != null) {
    if (foundValues.has(current.next.value)) {
      // Si ya hemos encontrado ese nodo debemos eliminarlo
      current.next = current.next.next;
    } else {
      foundValues.add(current.next.value);
      current = current.next;
    }
  }
};
