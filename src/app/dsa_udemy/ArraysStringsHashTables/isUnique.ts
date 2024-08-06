/*
 * Dado un método que recibe una String, comprobar si todos los caracteres son únicos o no.
 *
 * isUnique("abcde") => true;
 * isUnique("abcded") => false;
 */

const IsUnique = (s: string): boolean => {
  const NUMBERS_OF_CHARS: number = 128;
  const hashTable: Set<string> = new Set<string>();

  if (s.length > NUMBERS_OF_CHARS) return false;

  for (let i = 0; i < s.length; i++) {
    if (hashTable.has(s[i])) 
        return false;
    hashTable.add(s[i]);
  }

  return true;

  //return hashTable.size === s.length;
};

export default IsUnique;
