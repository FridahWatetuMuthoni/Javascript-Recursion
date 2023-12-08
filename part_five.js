/*Question Two:
Create an array with range of numbers
Input: start - 1 , end 5
*/

function create_array(startNum, endNum)
{
    if(startNum > endNum)
    {
        return []
    }

    const numbers = create_array(startNum, endNum - 1);
    console.log(numbers);
    numbers.push(endNum);
    return numbers;
}

//output [1, 2, 3, 4, 5]

console.log(create_array(1, 5))