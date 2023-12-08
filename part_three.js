//Convert a Loop to a Recursion Function

let numbers = [10, 20, 30, 40, 50, 60];

//LOOP
function multiply(arr)
{
    let product = 1;

    for(let i = 0; i < arr.length; i++)
    {
        product *= arr[i];
    }
    return product;
}

console.log(`Loop Product: ${multiply(numbers)}`);

// RECURSIVE FUNCTION ONE

function recursion_multiply_one(arr, len=0, product = 1)
{
    if(len == arr.length)
    {
        return product;
    }
    product *= arr[len];
    len++;
    return recursion_multiply_one(arr, len, product);
}

console.log(`Recurssion Product One: ${recursion_multiply_one(numbers)}`);

//RECURSIVE FUNCTION TWO

function recursion_multiply_two(arr)
{
    if(arr.length <= 0)
    {
        return 1;
    }
    console.log(arr);

    return recursion_multiply_two(arr.slice(0, arr.length - 1)) * arr[arr.length-1];
}

console.log(`Recurssion Product One: ${recursion_multiply_two(numbers)}`);

nums = [1, 2, 3, 4, 5]

console.log(nums.slice(0, nums.length-1));

