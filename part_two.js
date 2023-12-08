let people = ["anna", "mary", "jane", "john", "emily"]


function go_to_lunch(people, len = 0)
{
    if(people.length == len)
    {
        return true;
    }
    console.log(people[len]);
    len++;
    return go_to_lunch(people, len);
}

console.log(go_to_lunch(people));
