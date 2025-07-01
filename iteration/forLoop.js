for (let i = 0; i < 10; i++) {
    const element = i;
    if(element ==5){
        // console.log("5 is the best number")
    }
    // console.log(element);
    
} 
// console.log(element)

for(let i = 0; i<=10; i++){
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i} `);
        // console.log(i+'*'+ j + '='+i*j);
        
    }
}

let myArr = ["flash","batman","superman"]
// console.log(myArr.length);
for (let index = 0; index <= myArr.length; index++) {
    const element = myArr[index];
    // console.log(element)

    
}
//break & continue
// for (let index = 1; index <= 20; index++) {
//     if (index==5) {
//         console.log("detected 5");
//         break
        
//     }
//     console.log(`value of i is ${index} `)
    
// }
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log("detected 5");
        continue
        
    }
    console.log(`value of i is ${index} `)
    
}