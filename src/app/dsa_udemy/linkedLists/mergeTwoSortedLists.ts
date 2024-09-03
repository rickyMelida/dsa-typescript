/**
 * Escribe un algoritmo para combinar dos listas enlazadas simples ordenadas.
 * El resultado deber ser una unica lista enlazada ordenada. Devuelve su head.
 *
 * Ejemplo:
 *  Input:  1->2->4->6, 2->3->5
 *  Output: 1->2->2->3->4->5->6
 *
 * O(N), O(1)
 */

import { ListNode } from "../../dataStructures/linkedList";

export const mergeTwoSortedLists = (
  list1: ListNode<number>,
  list2: ListNode<number>
) => {
  let aux: ListNode<number> = new ListNode(-1);
  let current: ListNode<number> = aux;

  while (list1.value != null && list2.value != null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next ?? new ListNode();
    } else {
      current.next = list2;
      list2 = list2.next ?? new ListNode();
    }

    current = current.next;
  }

  if (list1 == null) {
    appendToList(current, list2);
  } else {
    appendToList(current, list1);
  }

  return aux.next;
};

/**
 * Punto extra si te das cuenta de un detalle:
 * No es necesaria la funcion appendToList
 *
 * Explicacion: con hacer current.next = list1 (o list2) es suficiente, ya que el resto de nodos
 * ya estan encadenados de forma correcta. Con eso podemos optimizar aun un poco mas la solucion.
 */
const appendToList = (
  current: ListNode<number>,
  listToAppend: ListNode<number>
) => {
  while (listToAppend.value != null) {
    current.next = listToAppend;
    listToAppend = listToAppend.next ?? new ListNode();
    current = current.next;
  }
};
