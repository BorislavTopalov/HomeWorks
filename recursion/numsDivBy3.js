let result = "";
function divisionBy3(a, nums){
    if(a > nums*3){
        return;
    }else {
        console.log(a);
        divisionBy3(a + 3, nums);
    }
}

divisionBy3(3, 5)