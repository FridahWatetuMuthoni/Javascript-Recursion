//Most Asked Recursion Questions

//Question One: Factorial of n


function factorial(n)
{
    if(n == 1)
    {
        return 1;
    }
    return factorial(n-1) * n;
}

console.log(factorial(5));