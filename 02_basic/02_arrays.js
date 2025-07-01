const marvel_heroes =["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes) //combine krdega lekin pura array daal dega jisko 1 element consider karenge
// console.log(marvel_heroes[3][1])

const all_new_heroes = [...dc_heroes,...marvel_heroes]//combine both marvel and dc heroes
console.log(all_new_heroes)

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)//infinity hm daal sakte hai nhi to specific no bhi daal sakte h
console.log(real_another_array);

console.log(Array.isArray("ankit"))
console.log(Array.from("ankit"))
console.log(Array.from({name:"ankit"}))//intresting
let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));

