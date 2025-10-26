function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }

  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  return numerator / denominator;
}

try {
  console.log(divide(10, 2));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(8, 0));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide("10", 5));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide("10", 0));
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Робота завершена");
}
