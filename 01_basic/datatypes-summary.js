//primitive datatypes
//7 types:string,number,boolean,null,undefined,symbol,bigInt

//Non primitive or Refernce type
//array,objects,functions

//is js in dynamiaccly or statically?  
//ans 
// const score = 100
// const scorevalue = 100.3

// const isLogegdIn = false
// const outsideTemp = null
// let userEmail;
// const id =  symbol('123')
// const anotherId = symbol('123')
// // console.log(id===anotherId);

// const bigNumber = 34544848545488989n 

// //arrays example 
const heroes = ["shaktiman","nagraaj","doga"];
let myobj ={ //{iske andr jo bhi hai sab ovject hai}
    name:"ankit",
    age :22,
}

//funstion 
const myFunction = function(){
    // console.log("hello world");

}
console.log(typeof heroes);

//assignment:read about datatypes

//StACK AND HEAP
//stack is a primitive datatype and heap is non primitive
let myyoutubename= "ankit jha"
let anothername ="gulshan jha"
anothername = "myyoutubename"
console.log(myyoutubename);
console.log(anothername);
let userone={
    email:"ankit6686510@gmail.com",
    upi:"user@ybl"

}
let usertwo = userone
usertwo.email="ajha54845@gmail.com"
console.log(userone.email);

console.log(usertwo.email);
