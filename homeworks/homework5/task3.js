const number = 5;
if (number < 1) {
    throw new Error("число повинно бути позитивним для побудови таблиці множення");
}
console.log("*** for ***")
for (let i = 1; i < 11; i++) {
  console.log(number + " x " + i + " = " + number*i);
}

console.log("*** while ***")
let countForWhile = 1;
while (countForWhile < 11) {
    console.log(number + " x " + countForWhile + " = " + number*countForWhile);
    countForWhile++;
}

console.log("*** do while ***")
let countForDoWhile = 1;
 do {
    console.log(number + " x " + countForDoWhile + " = " + number*countForDoWhile);
    countForDoWhile++;
} while (countForDoWhile < 11)