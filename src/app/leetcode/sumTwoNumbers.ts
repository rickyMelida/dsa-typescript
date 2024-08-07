/**
 *  You are given two non-empty linked lists representing two non-negative integers. 
 *  The digits are stored in reverse order, and each of their nodes contains a single digit. 
 *  Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    ## Example 1:
        Input: l1 = [2 => 4 => 3], l2 = [5 => 6 => 4]
        Output: [7 => 0 => 8]
        Explanation: 342 + 465 = 807.

    ## Example 2:
        Input: l1 = [0], l2 = [0]
        Output: [0]

    ## Example 3:
        Input: l1 = [9 => 9 => 9 => 9 => 9 => 9 => 9], l2 = [9 => 9 => 9 => 9]

        Output: [8,9,9,9,0,0,0,1]

    ## Constraints:
        The number of nodes in each linked list is in the range [1, 100].
        0 <= Node.val <= 9
        It is guaranteed that the list represents a number that does not have leading zeros.
*/

import { LinkedList, ListNode } from "../dataStructures/linkedList";
import { arrayToLinkedList, linkedListToArray } from "../utils/conversions";

function addTwoNumbers(l1: ListNode<number> | null, l2: ListNode<number> | null) {
    if (!l1) return l2;
    if (!l2) return l2;

    let result;
    const l1Array = linkedListToArray(l1);
    const l2Array = linkedListToArray(l2);

    if (l1 && l2)
        result = arrayToNumber(l1Array.reverse()) + arrayToNumber(l2Array.reverse());

    if(result)
        return arrayToLinkedList(result.toString().split('').reverse());

    return null;
};

export const arrayToNumber = (arr: number[]): number => {

    return parseInt(arr.reduce((prev, curr) => prev.toString() + curr.toString(), '0'));
}


export default addTwoNumbers;