// declare an empty array which will later store all multiples of 3 and 5
arr = []

// lopp through all numbers until 1000 and save/push multiples 
//of 3 and 5 to the empty array
for(i = 2; i < 1000; i++){
   if(i % 3 == 0){
    arr.push(i)
   }
   if(i % 5 == 0){
    arr.push(i)
   }
}

// call the arr.reduce method on the array to
//add all elements(multiples) in the arr and save to variable sum
let sum = arr.reduce(function(a, b){
    return a + b
})

//print the sum
console.log(sum)