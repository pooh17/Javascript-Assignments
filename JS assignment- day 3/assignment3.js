console.log('Evaluate gardes using IF-ELSE');
let marks = +prompt('Enter your marks');
// console.log(marks);

if(marks >= 70)
{
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks >= 50 && marks < 70)
{
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks >= 35 && marks < 50)
{
    console.log(`Marks are ${marks} and grade is C`);
}
else
{
    console.log(`Marks are ${marks} and your fail`);
}

console.log('Evaluate gardes using SWITCH');
switch(marks)
{
    case 70:
        console.log(`Marks are ${marks} and grade is A`);
        break;
    case 50:
        console.log(`Marks are ${marks} and grade is B`);
        break;
    case 35:
        console.log(`Marks are ${marks} and grade is C`);
        break;
    default:
        console.log('enter valid marks.');

}

console.log('Evaluate gardes using turnary');

let result = (marks >= 70) ?  `Marks are ${marks} and grade is A` :
            (marks >= 50 && marks < 70) ?  `Marks are ${marks} and grade is B` :
            (marks >= 35 && marks < 50) ?   `Marks are ${marks} and grade is C` :
            `Marks are ${marks} and your fail`;
console.log(result);