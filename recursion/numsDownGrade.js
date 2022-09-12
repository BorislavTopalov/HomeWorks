function printNumbersDowngrade(a, b) {
    if (a < b) {
        return;
    } else {
        console.log(a);
        printNumbersDowngrade(a - 1, b)
    }
}

printNumbersDowngrade(10, 1);