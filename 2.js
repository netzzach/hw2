function sum(...numbers) {
    let numberSum = 0;
    for (let elements of numbers) {
      numberSum = numberSum + elements;
    }
  
    console.log(numberSum);
  }
  
  sum(10, 50, 6, 7, 8, 11, 6, 3, 9);