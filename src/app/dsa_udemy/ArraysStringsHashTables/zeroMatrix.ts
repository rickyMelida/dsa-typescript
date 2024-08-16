/**
 * Dada una matriz, escribe un algoritmo para establecer ceros en la fila F y columna C si existe un
 * 0 en la celda F:C
 *
 * Ejemplo:
 *  Input:  2 1 3 0 2
 *          7 4 1 3 8
 *          4 0 1 2 1
 *          9 3 4 1 9
 *
 *  Output: 0 0 0 0 0
 *          7 0 1 0 8
 *          0 0 0 0 0
 *          9 0 4 0 9
 *
 * Temporal: O(F*C + z*(F+C))
 * Espacial: O(F*C) -> O(1)
 *
 */

export const zeroMatrix = (matrix: number[][]) => {
  const firstRowHasZero: boolean = hasFirstRowAnyZero(matrix);
  const firstColHasZero: boolean = hasFirstColAnyZero(matrix);
  checkForZeroes(matrix);

  processRows(matrix);
  processColumns(matrix);

  if(firstRowHasZero)
    setRowToZero(matrix, 0);

  if(firstColHasZero)
    setColToZero(matrix, 0);
};

const hasFirstRowAnyZero = (matrix: number[][]): boolean => {
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] == 0) return true;
  }
  return false;
};

const hasFirstColAnyZero = (matrix: number[][]): boolean => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] == 0) return true;
  }
  return false;
};

const checkForZeroes = (matrix: number[][]) => {
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] == 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
};

const processRows = (matrix: number[][]) => {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] == 0) {
      setRowToZero(matrix, row);
    }
  }
};

const setRowToZero = (matrix: number[][], row: number) => {
  for (let col = 0; col < matrix[0].length; col++) {
    matrix[row][col] = 0;
  }
};

const processColumns = (matrix: number[][]) => {
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] == 0) {
      setColToZero(matrix, col);
    }
  }
};

const setColToZero = (matrix: number[][], col: number) => {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][col] = 0;
  }
};
