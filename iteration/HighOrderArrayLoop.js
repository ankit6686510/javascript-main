// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}
const greetings ="hello world!"
for(const greet of greetings){
    // console.log(`each char is ${greet}`)
}
//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"united state of america")
map.set('FR',"France")

// console.log(map);
// for(const key of map){
//     console.log(key);//will print the whole array
// }
// for(const [key,value] of map){
//     console.log(key,':-',value);//will destructure the array
// }
const myObj = {
    'game1':'NFS',
    'game2':'spiderman'
}
for (const [key,value] of myObj) {
    // console.log(key,':-',value);
    }

    //
