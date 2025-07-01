//date
let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());//1/23/2024
// console.log(typeof mydate);//object

// let mycreatedate = new Date(2024,0,23)
// console.log(mycreatedate)
// let mycreatedate = new Date(2024,0,23,1,4)
// console.log(mycreatedate);
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());
let mycreatedate = new Date("01-23-2024")
// console.log(mycreatedate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreatedate.getTime());
// console.log(Math.floor(Date.now()/100));

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth()+1);//because of zero index 
console.log(newdate.getDay());

`${newdate.getDay()} and the time `
newdate.toLocaleString(`default`,{
    weekday:"long",
})
