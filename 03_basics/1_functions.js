function sayMyName() {
console.log("K"),
console.log("R"),
console.log("I"),
console.log("S"),
console.log("H"),
console.log("N"),
console.log("A")
}

// sayMyName();

// function addTwoNumbers(n1,n2){
//     console.log(n1+n2);
    
// }

function addTwoNumbers(n1,n2){
    const n3= n1+n2;
    return n3;
}
// const result= addTwoNumbers(11,1);
// console.log(result);

//rest operator
function calculateCartPrice(val1,val2,...num1){
    console.log(val1);
    console.log(val2);
    console.log(num1);

    return num1;
}
// console.log(calculateCartPrice(12,20,24));

const user = {
    username : "Krishna",
    price : 1999
}

function objectHandle(anyObject){
    console.log(`${anyObject.username} is the user with price of ${anyObject.prices}`);
    
}
objectHandle(user);