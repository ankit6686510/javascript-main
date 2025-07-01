
function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
}

// sayMyName()
// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumber(number1,number2){
    let result = number1 +number2
    return result
    // return number1+number2
}
const result = addTwoNumber(3,5)
// console.log("result:",result);
// console.log(typeof result)

function loginUSERmessage(username = "ankit"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//  console.log(loginUSERmessage("ankit"))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500))//[400,500] 200 aur 300 val1 and val2 me store h aur yaha pr ...rest opertor hai spread nhi situation k hissab s use krte h hum

const user={
    username : "ankit",
    price : 1000,
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
handleobject({
    username :"ankit",
    price : "100"
})

const newarray =[200,300,400,500]
function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(newarray));//300

console.log(returnSecondValue([200,300,400,500]));// it will also return 300

