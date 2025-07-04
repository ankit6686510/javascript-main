// setTimeout(() => {
//     console.log("task 1")
    
// }, 7000);
// setTimeout(() =>{
//     console.log("task 2")
// } ,5000);
// setTimeout(() =>{
//     console.log("task 3")
// },3000);

// console.log("hey do you want cofee");
// console.log("I am done with coding");
// for(let i = 1 ; i <= 400000; i++){
//     console.log('person' , i);
// }
// console.log("person 400001");

async function fetchdata(){
    let response  = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(await response.json());

}
fetchdata();
console.log("ankit");