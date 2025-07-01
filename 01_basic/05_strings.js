const name = "ankit"//declarying s string
const repocount = 50
//console.log(name + repocount+"value");//older way to write string now we use modern method to write it

console.log(`hello my name is ${name} and my repo count is ${repocount} `);//string interpolation
//another way to declare a string
const gamename = new String('ankit-kumar')
console.log(gamename[0]);
console.log(gamename.__proto__);//{}
console.log(gamename.length)
console.log(gamename.charAt(4));
console.log(gamename.indexOf('t'));
console.log(gamename.toUpperCase());//it will not change in original string 

const newString = gamename.substring(0,4)//we can not pass negative value in this it will give me same result 
console.log(newString);//anki it will not include the 4th character

const anotherstring =  gamename.slice(-8,4)
console.log(anotherstring);//i

const newstringone = "   ankit    "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://ankit.com/ankit%20jha"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gamename.split('-'));//split on rhe basis of - also it will give answer in array

