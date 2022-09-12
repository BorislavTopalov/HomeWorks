let rows = "";
let cols = "";
function returnTable(a, b){
    if(a -1 > b){
        return b ;
    }
     cols += a - 1
       rows += cols
    
  returnTable(a + 2, b)
    console.log(rows);
    
}
returnTable(4, (4-1)*3)

