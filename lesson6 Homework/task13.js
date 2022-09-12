let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = [1, 2, 3, 4, 5, 6];
let newArr = [];

function couplingArrays(arrays) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        for (let i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i]);
        }
        for (let i = 0; i < arr2.length; i++) {
            newArr.push(arr2[i]);
        }
        console.log(newArr);
    }
}
couplingArrays(newArr);