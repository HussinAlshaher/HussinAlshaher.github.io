var x= 10;
let y=10;
console.log(`the result of function is :${sum(x,y)}`);

function sum(pX,pY){

    // Convert the input values to numbers
var numX = parseFloat(pX);
var numY = parseFloat(pY);

// Check if the inputs are valid numbers
if (isNaN(numX) || isNaN(numY)) {
document.getElementById('result').innerText = 'Please enter valid numbers.';
} else {
// Calculate the sum
var result = numX + numY;
// Display the result
document.getElementById('result').innerText = 'The sum is: ' + result;
}
    console.log( numX+numY);

}