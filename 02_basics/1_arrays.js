// array

const myArr=[0,1,2,3,4,5];
const myHeroes=["ironman","spiderman","hulk"];
// console.log(myHeroes[1]);
// console.log(myArr[0]);

// myArr.unshift(10);
// const newArr=myArr.join();

// console.log(myArr);
// console.log(newArr);

// console.log(myArr);

// const myn1=myArr.slice(1,3);
// console.log("a",myArr);
// const myn2=myArr.splice(1,3);
// console.log(myn1);
// console.log(myn2);
// console.log("b",myArr);

//slice doesnot manipulate the array just returns a part of the array

//splice manipulates the array and return the part of the array along with the ending element 


// const marvel_heroes=["spiderman","hulk","thor"];
// const dc_heroes=["batman","superman","aquaman"];

// const all_heroes=marvel_heroes.concat(dc_heroes); //concatenation
// console.log(all_heroes);
// const all2=[...marvel_heroes, ...dc_heroes]; //spread method
// console.log(all2);

// console.log(...marvel_heroes, ...dc_heroes);


// const newArr=[1,2,3,[4,5,6,[7,8,9,[10,[11,12]]]]];
// const anotherArr=newArr.flat(Infinity);
// console.log(newArr);
// console.log(anotherArr);


console.log(Array.from("KRISHNA"));
console.log(Array.from({name : "KRISNA"})); //returns empty array 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score3,score2));