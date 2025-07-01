const userEmail = []
 if(userEmail){
    console.log("got user email");
 }else{
    console.log("don't have user email");
 }

 //falsy valaue
//  false ,0 ,-0,BigInt,"", null,undefined,NaN
//Truthy value ye saari value true hoti hai
// "0","false" ,'false'," "("string k andr space true ho jaata hai" ),[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

// how you candetdtct object is empty or not?
const emptyobj = {}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

//ye chheze yaad rkh le
// false == 0//true
// false == ''//true
// '' == 0//true

//Null Coalescing Operator (??):null undefined
let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);

//Terinary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80")
