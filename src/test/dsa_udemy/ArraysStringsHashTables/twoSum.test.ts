import { twoSum } from "../../../app/dsa_udemy/ArraysStringsHashTables/twoSum";

describe("Two sum algorithms suit test", ()=> {
    xit("Should true for target 7", () => {
        const array = [9, 2, 5, 6];
        const actual= twoSum(array, 7);
        //assertTrue((result[0] == 1 && result[1] == 2) || (result[0] == 2 && result[1] == 1));
        if(actual){
            expect(actual[0]).toBe(1);
            expect(actual[1]).toBe(1)
        }

    })
})