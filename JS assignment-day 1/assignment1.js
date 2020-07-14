console.time();
//print document in the console window
console.log("document"); 
//print the whole html code in console window
console.log(document);
//print html head code in console window
console.log(document.head);
//print html body code in console window
console.log(document.body);
//print error msg console window
console.error("An error occured");
//print warning in console window
console.warn("Warning");
// print variable in console window
var name="pooja thule";
console.log("My name :"+name);
//print array a ,b,c in console window
var a=[name='pooja',age=24,city='Mumbai'];
var b=[name='prathamesh',age=22,city='Bangolre'];
var c=[name='Neeraj',age=12,city='Pune'];
console.log({a,b,c});
//print array a ,b,c in table format 
console.table({a,b,c});
// print message using css - for that we need to write %c 
console.log('%c Custome message', 'color:blue');
// print information in consle 
console.info("Information");
//print the count in console
for(var i=1;i<5;i++)
{
    console.count("count")
}
//print the excuting time of code
console.timeEnd();