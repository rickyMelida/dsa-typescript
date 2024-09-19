/*
 * Dado un String que solamente contiene los caracteres '(', ')', '{', '}', '[' y ']',
 * implementa un algoritmo para determinar si es válido.
 *
 * Ejemplo 1:
 *  Input: "([]){}"
 *  Output: true
 *
 * Ejemplo 2:
 *  Input: "({)}"
 *  Output: false
 * 
 * ([]){} => )]
 */

import Stack from "../../dataStructures/Stack";

export const validParenthesis = (s: string): boolean => {
  const stack: Stack<string> = new Stack<string>();

  for (let c of s) {
    if (c == "(" || c == "{" || c == "[") {
      stack.push(getOpposite(c));
    } else {
      if (stack.isEmpty() || stack.pop() != c) return false;
    }
  }
  return stack.isEmpty();
};

const getOpposite = (c: string): string => {
  if (c == "(") return ")";
  if (c == "{") return "}";
  if (c == "[") return "]";

  return "0";
};
