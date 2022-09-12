function printNumbers(a, b) {
    if (a > b) {
        return;
    } else {
        console.log(a);
        printNumbers(a + 1, b);
    }
}

printNumbers(1, 100);

