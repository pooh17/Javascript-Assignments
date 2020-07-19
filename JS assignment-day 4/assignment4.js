let number= prompt('enter two numbers with space :');
// console.log(number);
let no = number.split(' ');
let num1 = +no[0];
let num2 = +no[1];
console.log(`${num1}  ${num2}`);
let op =+prompt(`Select the operation you want to do: \n 1 .Addition \n 2 .Subtraction \n 3 .Multiplication \n 4 .Division \n 5 .Square root \n 6 .Percentage `);

switch(op)
{
    case 1:
        let add= num1 + num2;
        console.log(`Addition: ${add}` );
        break;
    case 2:
        let sub =  num1 - num2;
        console.log(`Subtraction: ${sub} `);
        break;
    case 3:
        let mul = num1 * num2;
        console.log(`Multiplication: ${mul}`);
        break;
    case 4:
        let div = num1 / num2;
        console.log(`Divison: ${div}`);
        break;
    case 5:
        let sqroot = Math.sqrt(num1);
        console.log(`Square root: ${sqroot}`);
        break;
    case 6:
        let percenatge = num1/num2*100;
        console.log(`percenatge: ${percenatge}`);
        break;
    default:
        console.log('Select number between 1 to 6 ');

}
