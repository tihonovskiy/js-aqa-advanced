const users = [
    { name: "Іван", email: "ivan@gmail.com", age: 25 },
    { name: "Олена", email: "olena@gmail.com", age: 30 },
    { name: "Максим", email: "max@gmail.com", age: 22 }
];

for (const { name, email, age } of users) {
    console.log("Ім'я:", name);
    console.log("email:", email);
    console.log("Вік:", age);
    console.log();
}
