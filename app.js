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

//find the most frequent item in an array
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,];
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr1.length; i++) {
            for (var j = i; j < arr1.length; j++) {
                if (arr1[i] == arr1[j])
                m++;
            if (mostFrequent < m) {
                mostFrequent = m;
                item = arr1[i];
            }
        }
        m = 0;
    }
        console.log(item+" ( " +mostFrequent +" times ) ") ;            

