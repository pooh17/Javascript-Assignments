/*var
Print the value as a variable
and using console.log we can  print that variable
*/
var a=10
console.log(a);
//Print the null value as a variable
var a =null;
console.log(a);
//We intialize first and then assign value to the variable
var b;
b=5;
console.log(b);
// intialize the value as a name
var name="pooja";

/*let -- it is a local variable
It can access only inside block
for declare let variable we write let keyword before variable_name
*/
{
    let name = 'pooja thule';
    console.log(name);
}
console.log(name);

/*const - value is constant
We can't change the constant value after initilaize 
We have to decalre the value at the time of intialization
*/
const city='Mumbai';
console.log(city);
//It's show error because of constat variable
city ='pune';
console.log(city);


