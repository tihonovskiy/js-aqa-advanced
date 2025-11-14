const person = {
    firstName: "Максим",
    lastName: "Коваленко",
    age: 30
};

person.email = "max.kovalenko@gmail.com";

delete person.age;

console.log(person);
