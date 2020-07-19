let number = prompt(`Enter a number for print prime number between o to given number`);
// console.log(number);
console.log(`Prime numbers between 0 to ${number}: `)
for(i = 2 ; i<=number; i++)
{
    var prime = true;
    for(var j =2; j<=i ;j++)
    {
        if(i%j===0 && j!==i)
        {
            prime = false;
        }
    }
    if(prime === true)
    {
        console.log(i);
    }
}