// singleton

const mySym= Symbol("key1");
const JsUser = {
    name : "Krishna", //behind the scene name is in string format  
    age : 18,
    "class roll" : 2211701087,
    emailId : "krishnadidwania17@gmail.com",
    loggedIn: false,
    [mySym] : "mykey1"
}
// console.log(JsUser.name);
// console.log(JsUser["age"]);//so the key should be in quotes
// console.log(JsUser[mySym]);
// console.log(mySym);

// JsUser.age=19;
// console.log(JsUser.age); //overriding an object using =

// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`HELLO Js USER,${this.name}`);
    
}
console.log(JsUser.greeting())
