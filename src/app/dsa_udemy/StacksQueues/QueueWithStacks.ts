/*
 * Implementa una clase MyQueue utilizando dos stacks.
 *
 * Como Stack usaremos la Interfaz Deque, que proporciona las operaciones de una cola doblemente terminada,
 * permitiéndola usar como Pila o Cola (solo las operaciones de Pila están permitidas en este ejercicio).
 *
 * Java también tiene la clase Stack, pero su uso no está recomendado por extender de la clase Vector, que
 * no tiene demasiado sentido, y por ser una clase específica y no una interfaz. Si quieres saber más sobre
 * este tema puedes acceder al siguiente enlace:
 * https://stackoverflow.com/questions/12524826/why-should-i-use-deque-over-stack
 */

import Stack from "../../dataStructures/Stack";

export default class QueueWithStacks<T> {
  firstStack: Stack<T> = new Stack();
  secondStack: Stack<T> = new Stack();

  add(value: T) {
    this.firstStack.push(value);
  }

  peek() {}

  remove() {}

  isEmpty() {}

  size() {
    
  }
}
