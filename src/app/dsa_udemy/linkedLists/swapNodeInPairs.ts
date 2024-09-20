/**
 * Escribe un algoritmo que intercambie parejas de nodos adyacentes sin
 * modificar el valor interno de los nodos.
 *
 * Ejemplo:
 *  Input: 1->2->4->6->8
 *  Output: 2->1->6->4->8
 */

import { ListNode } from "../../dataStructures/linkedList";

export const swapNodeInPairs = (head: ListNode<number> | null) => {
  if (head == null || head.next == null) return head;

  // aqui guarda la "lista restante" de las parejas a intercambiar
  // Nodes to be swapped
  const firstNode = head;
  const secondNode = head.next;
  const remaining = secondNode.next;

  // Swap the first two nodes
  secondNode.next = firstNode;
  firstNode.next = swapNodeInPairs(remaining);

  // Return the new head which is the second node
  return secondNode;
};
