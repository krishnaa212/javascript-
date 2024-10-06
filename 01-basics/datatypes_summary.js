// primitive
//  7 types
// String Boolean Number null undefined Symbol BigInt

const id=Symbol("123");
const anotherId=Symbol("123");

// console.log(id===anotherId);

// const bigNumber=564765893297667667n;
// console.log(typeof bigNumber);
// reference
// array,objects,functions

const heros=["shaktimaan","naagraj","hero"];

let myObj={
    name : "krishna",
    age : 21
}

const myFunction=function(){
    console.log("hello world from function");
}

console.log(typeof heros);

// integer -> number
// symbol -> symbol
// object -> object
// array -> object
// function -> objectfunction