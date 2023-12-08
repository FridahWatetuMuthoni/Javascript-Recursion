function Piyush()
{
    return Rehana();
}

function Rehana()
{
    return Vadant();
}

function Vadant()
{
    return Chirag();
}

function Chirag()
{
    return Ajay();
}

function Ajay() //the base case
{
    return true;
}
//since the base case is true the rest will return as true

console.log(Piyush());