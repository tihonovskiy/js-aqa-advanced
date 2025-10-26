function handleNum(number, onEven, onOdd) {
  if (number % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(11, handleEven, handleOdd);
handleNum(78, handleEven, handleOdd);
