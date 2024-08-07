export const insertionSort = (arr: number[], order: string='asc'): number[] => {
    const isDescending = order === 'desc';
    let j: number;
    let key: number;
    for(let i=1; i < arr.length; i++) {
      key = arr[i];
      j = i -1;
  
      while(j >=0 && key < arr[j]){
        arr[j+1] = arr[j];
        j = j -1;
      }
  
      arr[j + 1] = key;
    }
  
    return isDescending ? arr.reverse() : arr;
  }