function checkOrder(available, ordered) {
  try {
    if (available < 0 || ordered < 0) {
      throw new Error("Values cannot be negative");
    }

    switch (true) {
      case ordered === 0:
        return "Your order is empty";
      case ordered > available:
        return "Your order is too large, we don’t have enough goods.";
      default:
        return "Your order is accepted";
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

console.log(checkOrder(100, 0));
console.log(checkOrder(100, 150));
console.log(checkOrder(100, 50));
console.log(checkOrder(-10, 5));
