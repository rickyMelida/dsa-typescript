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
  if(!head) return;

  const foundValues: Set<T> = new Set();
  let current: ListNode<T> | null = head;

  if(current.value)
    foundValues.add(current.value);

  while(current && current.next?.value) {
    if(foundValues.add(current.next.value)) {
      current.next = current.next.next;
    }
    current = current.next;
  }

}