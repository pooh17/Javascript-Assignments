 let a = prompt("Enter a positive number with space");
console.log(a);

// let arr = a.split(" ");
// console.log(arr);

let arr = Array.from(a.split(" "));
console.log(arr);

let odd = arr.filter(odd=>odd%2!==0);
console.log(`Odd numbers :  ${odd}`);

let cube = odd.map(cube=>cube**3);
console.log(`Cube of odd numbers : ${cube}`);

/*
n = parseInt(prompt("Please enter a positive number"));
let arr = [];
   for (let i = 1; i <= n; i++) {
         arr.push(i);
    }
    console.log(arr);
   let arr1 = arr.filter((n)=>n%2!==0).map((n)=>n**3)
   console.log(arr1);
   */