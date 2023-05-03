
Array.prototype.myFunction = function () {
//    Here this will point to the specific array on which this function is called
   console.log(this); 
}

const arr = [1,2,3,4,5];
arr.myFunction();