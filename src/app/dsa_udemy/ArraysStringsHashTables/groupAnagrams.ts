/**
 * Un anagrama es una palabra creada a partir de otra reordenando sus letras.
 * Dado un array de strings, devuelve los anagramas agrupados. Cualquier orden es valido.
 *
 * Ejemplo 1:
 *  Input: ["saco", "arresto", "programa", "rastreo", "caso"]
 *  Output: [["saco", "caso"], ["arresto", "rastreo"], ["programa"]]
 *
 */

export const groupAnagrams = (words: string[]): string[][] => {
  if (words == null || words.length == 0)
    return [];

  const anagramMap = buildAnagramMap(words);
  return Array.from(anagramMap.values());
};

const buildAnagramMap = (words: string[]): Map<string, string[]> => {
  const anagramMap = new Map<string, string[]>();

  for (let i = 0; i < words.length; i++) {
    const anagramHash = getAnagrmHash(words[i]);

    if (anagramMap.has(anagramHash))
        anagramMap.get(anagramHash)?.push(words[i]);
    else 
        anagramMap.set(anagramHash, [words[i]]);
  }

  return anagramMap;
};

const getAnagrmHash = (s: string): string => {
  let letterCount: number[] = new Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i++)
    // in the difference position put 1 in our letterCount
    // for example: 's'(115 in ascii) - 'a'(97 in ascii) = 18
    // then 18 is the position in the alphabet array [a...z]
    letterCount[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;

  return letterCount.join("");
};
