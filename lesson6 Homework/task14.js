function converting(n) {
    if (typeof n === "number") {
        if (n < 0) {
            return -1;
        } else if (n === 0) {
            return 1;
        } else {
            for (let i = n - 1; i > 0; i--) {
                n *= i;
            }
            return n;
        }
    }else {
        return false;
    }
}
let result = converting(5);
console.log(result);