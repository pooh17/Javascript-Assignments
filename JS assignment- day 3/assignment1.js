let number = prompt('Enter a number',23);
console.log(number);

function checkno()
{
    if (number % 2== 0)
    {
        console.log(`The number enter is ${number} and Number is even`);
    }
    else
    {
        console.log(`The number enter is ${number} and Number is odd`);
    }
}
checkno();