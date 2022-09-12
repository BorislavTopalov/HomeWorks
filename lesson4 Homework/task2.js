var array = [5, 2, 5, 8, 3];

if (Array.isArray(array)) {
    for (var i = array.length - 1; i >= 0; i--) {
        array.push(array[i]);
    }
    console.log(array);
} else {
    console.log("Invalid data");
}