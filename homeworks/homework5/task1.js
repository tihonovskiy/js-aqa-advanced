const averageGrade = 75;

if (averageGrade < 1 || averageGrade > 100) {
    throw new Error("Оцінка не вірна, вона виходить за рамки допустимого діапозону");
}

if(averageGrade < 60) {
    console.log("Незадовільно");
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log("Задовільно");
} else if (averageGrade > 71 && averageGrade <= 80) {
    console.log("Добре");
} else if (averageGrade > 80 && averageGrade <= 90) {
    console.log("Дуже добре");
} else if (averageGrade > 90 && averageGrade <= 100) {
    console.log("Відмінно");
}
