const student ={
    name :'Helsinki',
    age : 24,
    projects :{
        diceGame : "Two players dice game using Javascript"
    }
}
// console.log(student.name);
// console.log(student.projects.diceGame);

console.log('Destructure object');
const {name , age, projects:{diceGame}} = student

console.log(`The name of student : ${name}`);
console.log(`Student age  : ${age}`);
console.log(diceGame);