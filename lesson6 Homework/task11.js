let array = [1, 2, 3, 4, 5];

function creatingArray(arr) {
    if (Array.isArray(array)) {
        console.log(array);
    } else {
        return false;
    }
}
creatingArray(array);