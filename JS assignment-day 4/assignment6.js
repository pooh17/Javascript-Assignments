let number = prompt('Enter the number greater then 100 :');
 /* console.log(number);
for(i=1; i < 100; i++ )
{
    if(number > 100 || number == null || number ==' ')
    {
        console.log(`Number is ${number}`); 
        break;

    }
   else if(number <= 100 )
    {
        number =prompt('Enter number again:');
    }
    else
    {
        console.log('enter valid input');
        break;
     }
}  */
let num = function(){
    for (let i=1; i < 100; i++ ){
        (number >= 100 || number == null || number ==' ') ? console.log(`Number is ${number}`): 
        (number < 100) ? number =prompt('Enter the number greater then 100 ') :
        console.log('enter valid input');   
    }
}
num();

