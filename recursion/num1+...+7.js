
function sum(a, b) {
    if (a > b) {
        return 0;
    }
    return a + sum(a + 1, b);
}

let result = sum(1, 4);
console.log(result);