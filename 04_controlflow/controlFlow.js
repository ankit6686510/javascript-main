//if
// const isuserLogegdIn = true

// if(false){
    //will not execute
// }
//conditon checking <,> <=,>=,==(checking if equal),!=,===(comapre datatypess too)

// const temperature = 41;
// if(temperature === 40){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// const score = 200
// if(score>100){
//     let power ="fly"//user cont let dont use var bcz if we use var it will print outside the scope
//     console.log(`user power :${power}`);//power not defined error
// }
// console.log(`user power: ${power}`);

// const  balance = 1000

// if(balance>500) console.log("test");//implicit scope defined in a single line or we can use comma neeche hai example,
// if(balance>500) console.log("test"),
// console.log("test2")//lekin mat likh bekar hota h

//Nesting
// if(balance < 500){
//     console.log("less than 500");

// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const logegsinFromGoggle = false
const logegsinFromEmail = true

if(userLoggedIn && debitCard){
    console.log ("allow to buy course");
}

if(logegsinFromEmail || logegsinFromGoggle){
    console.log("user logegd in");
}

