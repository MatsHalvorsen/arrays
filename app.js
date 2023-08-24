//join the elements of the array into a string
myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join())
console.log(myColor.toString())
console.log(myColor.join("+"))

//accept number a number as input and insert dashes (-) between each even number
let arr = [];
function getValue() {
   const num = document.querySelector('input').value;
   console.log(num)
    
   if (num % 2 == 0) {
    arr.push(num, '-');
    console.log(arr)
   } else {
    console.log("number is odd")
   }
}
console.log(arr.join(''))