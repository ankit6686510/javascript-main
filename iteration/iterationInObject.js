// const myobj ={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:"swift by apple"
// }   
// for (const key in myobj) {
//     console.log(key);
    
// } 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);//to get key
    //to get object:-->
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
} 