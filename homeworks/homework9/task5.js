const users = [
    { name: "Іван", email: "ivan@gmail.com", age: 25 },
    { name: "Олена", age: 30 },
    { email: "max@gmail.com" },
    { name: "Андрій" }
];

for (const user of users) {
    const {
        name = null,
        email = null,
        age = null
    } = user;

    console.log("Ім'я:", name ?? "Невідомо");
    console.log("Email:", email ?? "Невідомо");
    console.log("Вік:", age ?? "Невідомо");
    console.log();
}
