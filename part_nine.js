/*
Question:
Subsets (Backtracking Algorith using Recursion)
Given an integer array nums of unique elements, return all possible subsets(the powe set)
The solution must not conatin duplicate subsets. Return the solution in any oredr

Input: [1, 2, 3]
Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Input: [0]
Output: [[],[0]]
*/


function subsets(nums)
{ 
    let result = [];
    let temp = [];

    function recursive(nums, i)
    {
        if(i === nums.length)
        {
            return result.push([...temp])
        }
        console.log(result);
        temp.push(nums[i]);
        recursive(nums, i+1)
        temp.pop()
        recursive(nums, 1+i)
    }
    recursive(arr,0)

    return result;
}

let arr = [1, 2, 3]

console.log(subsets(arr))
