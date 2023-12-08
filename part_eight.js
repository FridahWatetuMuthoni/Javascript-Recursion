// Reversing a string

function reversing_string(str, reversed = '')
{
    if(str.length === 0)
    {
        return reversed;
    }

    reversed = reversed + str[str.length-1]
    return reversing_string(str.slice(0, str.length-1), reversed);
}

let word = "Hello"

console.log(reversing_string(word))