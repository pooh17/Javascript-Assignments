let text = "Pooja Pandurang Thule.";
console.log('String methos');
console.log(text ,typeof text);
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text[8]);     //Assessing the index
console.log('Character at position 6: '+text.charAt(0));
console.log('Unicode of the first character of string: '+text.charCodeAt(0));
let a =' How are you?';
console.log(text.concat(a));  //join two strings
console.log('Check string ends with thule:'+text.endsWith('Thule.'));
var res =String.fromCharCode(65, 66 ,67);
console.log('Check the chat at code 65 66 67: '+res);
console.log("Check if a string includes 'pooja': "+text.includes('Pooja'));
console.log('Substring: '+text.substring(1, 8));
console.log('Slice: '+text.slice(0, 5));
console.log("Repace pooja with sharda : "+text.replace('Pooja','Sharda'));
console.log(text.trim());

console.log('Array Of methods')
let arr1 = ['pooja','prathamesh','sameer'];
let arr2 = ['thule','pawar','dalvi']
console.log(arr1 , arr2)   // print array
console.log('Concat: '+arr1.concat(arr2));
console.log('copy : ', arr1.copyWithin(2,0));
console.log('Fill the name neeraj : '+arr1.fill('neeraj',2,3));
console.log('length of an array:' +arr2.length);
console.log('Check whether an object is an array : '+Array.isArray(arr1));
console.log('Search an array for the item prathamesh :'+arr1.indexOf('prathamesh'));
console.log('convert array into string : '+arr1.toString());
console.log('Sorting array: '+arr1.sort());
console.log('Add items to an array: '+arr1.splice(2,0,'sameer','supriya'));
console.log(arr1);
console.log('Reverse the array :'+arr2.reverse());
