// const user={
//     username : "ankit",
//     price : "999",

//     welcomemessage:function(){
//         console.log(`${this.username},welcome to website`);//this refer to the current context
//     }
// }

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// function chai(){
//     let username = "ankit"
//     console.log(this.username);
// }
// chai()
// const chai = function(){
//    let username = "ankit"
//    console.log(this.username)
// }
// const chai = () => {//arrow fncn
//    let username = "ankit"
//    console.log(this)
// }
// chai()

// const addTwo = (num1 , num2) =>
// {
//     return num1+num2
// }
// console.log(addTwo(3,4))


//implicit return
const addTwo = (num1 , num2) => num1+num2
// const addTwo1 = (num1 , num2) => (num1+num2)

console.log(addTwo(3,4))

const myarr =[2,3,4,5]
myarr.forEach()