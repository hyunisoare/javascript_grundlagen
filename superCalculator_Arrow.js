// Does it have 3 sides?
// Boolean 

function isTriangle(a,b,c){
    if (a === 0 || b === 0 || c ===0){
        return false;
    } else if (a + b > c && b + c > a && a + c > b){
        return true;
    } else {
        return false;
    }
}

console.log(isTriangle(1,3,4));