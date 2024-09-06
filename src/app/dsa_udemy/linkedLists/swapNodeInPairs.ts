/**
 * Escribe un algoritmo que intercambie parejas de nodos adyacentes sin 
 * modificar el valor interno de los nodos.
 * 
 * Ejemplo:
 *  Input: 1->2->4->6->8
 *  Output: 2->1->6->4->8
 */

import { ListNode } from "../../dataStructures/linkedList";

export const swapNodeInPairs = (head: ListNode<number>) => {
  if(head.value == null || head.next == null) return head;

  // aqui guarda la "lista restante" de las parejas a intercambiar
  let temp = head.next.next; // 4->6->8
  head.next.next = head;// 1->2->1...
  head = head.next; // 2->1...
  head.next.next = swapNodeInPairs(temp);

  return head;
}