// const tinderUser = new Object() // Singleton Object

const tinderUser = {} // Non - Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Madhav",
            lastname : "Khanna"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);

const course = {
    coursename : "learnJS",
    price : "999",
    courseinstructor : "Madhav"
}

const {courseinstructor : teacher} = course
console.log(teacher);