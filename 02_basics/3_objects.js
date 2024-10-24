//const tinderUser=new Object();

const tinderUser={};

tinderUser.name = "krishna";
tinderUser.age = 20;
tinderUser.loggedIn = true;
// console.log(tinderUser);

const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "c",
    4 : "d",
}
// console.log(Object.assign({},obj1,obj2))

// console.log({...obj1, ...obj2});

const users = [{
    user1 : "k"
},
    {user2 : "r"},
{user3 : "i"}
]
// console.log(users[0]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('agepo'));


//destructuring an object
const course = {
    coursename : "JS in Hindi",
    price : 999,
    teacher : "Hitesh"
}

const {teacher : t} = course;
console.log(t);







