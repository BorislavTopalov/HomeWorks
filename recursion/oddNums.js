function printOddNumbers(a, b) {
    if (a > b) {
        return;
    } else{ 
      console.log(a);
      printOddNumbers(a+2, b)
    }
   
}

printOddNumbers(-9, 10);