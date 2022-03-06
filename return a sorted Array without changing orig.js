//Return a Sorted Array Without Changing the Original Array
//nonMutatingSort([1, 30, 4, 21, 100000]) should return [1, 4, 21, 30, 100000].

var globalArray = [5, 6, 3, 2, 9];
let anotherArr = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
  
  let newArr = [];
  newArr.push(...arr);
  
  const sortedArr = newArr.sort((a,b) => a-b);

  return sortedArr;
 
}
nonMutatingSort(globalArray);


//shorter way
function nonChangingSort(arr){
    return [].concat(arr).sort((a,b)=>a-b);
}
