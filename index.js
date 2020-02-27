// Code your solutions in this file
function writeCards(arr, event){
  let newArr = []; 
  for(let i = 0; i < arr.length; i++){
    newArr.push(`Thank you, ${arr[i]}, for the wonderful birthday gift!`); 
  }
  return newArr; 
}