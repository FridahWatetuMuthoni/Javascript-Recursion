/*
Given an iteger x, return true if x is a palindrom, and false otherwise
a number is a palindrome when it reads the same forward and backward
input x = 121 ------> output true
input x = 10  ------> output false
*/

function is_palindrome(num, temp=0)
{
    if(num == 0){
        return temp;
    }

    temp = (temp * 10) + (num % 10)

    return is_palindrome(Math.floor(num / 10), temp);
}


let result = is_palindrome(856);
console.log(result)