let score = "25abc"

//console.log(typeof score);
//console.log(typeof(score));//scope as a method mtlb writing in parenthesis

let valueInNumber =  Number(score)//convert string in number
//console.log(typeof valueInNumber);
//console.log(valueInNumber);//NaN not a number

//"33"==>nummber
//"33abc"==> NaN
//true ==>1 false==>0

let isLoggedIn ="ankit" ;
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//note 1 ==>true , 0 ==> false
//""==>false
//"ankit"==>true

let someNumber = 22
let StringNumber = String(someNumber)//number has changed into string
console.log(StringNumber)
console.log(typeof StringNumber)

//some methematics operations
console.log(2+2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1 = "hello"
let str2 = " ankit"
let str3 = str1+str2;
console.log(str3);

//some tricky things in js
console.log("1"+2); //12 if string first it is considered as a string
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32  not a good way to write we write code in better wasy IF A STRING IS AT LAST WE WILL PERFORM THE OPERATION FIRST THAN WILL CONVERT IN STRING 


// console.log(+true) //1
// console.log(true) //true
// console.log(true+) //error

let num1,num2,num3
num1 = num2 = num3 = 2+2


let gameCounter = 100
gameCounter++; //ppostfix
console.log(gameCounter);//101

let gameCounter1 = 100
++gameCounter1; //prefix opeartor value pehlay increase hoti hai
console.log(gameCounter1);//101



