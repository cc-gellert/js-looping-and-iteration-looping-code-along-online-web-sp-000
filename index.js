// Code your solutions in this file
function writeCards(arr, event){
  let newArr = []; 
  for(let i = 0; i < arr.length; i++){
    newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`); 
  }
  return newArr; 
}

function countDown(int){
  let i = int; 
  while (i >= 0) {
    console.log(`${i}`); 
    i--; 
  }
}