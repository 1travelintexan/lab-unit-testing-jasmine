function sumArrayNumbers(array) {
  if (typeof array !== "object") return undefined;
  let allNumbers = true;
  array.forEach((e) => {
    if (typeof e !== "number") {
      allNumbers = false;
    }
  });
  if (allNumbers) {
    return array.reduce((a, b) => {
      return a + b;
    }, 0);
  } else {
    return undefined;
  }
}
