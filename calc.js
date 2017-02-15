


var answer = 0;

// Function Definitions

// 1. Write a function called add that takes two arguments and adds them together, returning the result

function add(n1,n2) {
    var output = '0'
   return n1 + n2
}
// 2. Write a function called subtract that takes two arguments and subtracts them from each other, returning the result

function subtract(n1,n2) {
    return n1 - n2
}

// 3. Write a function called multiply that takes two arguments and multiplies them other, returning the result

function multiply(n1,n2) {
    return n1 * n2
}

// 4. Write a function called divide that takes two arguments and divides them from each other, returning the result

function divide(n1,n2) {
    return n1 % n2
}

function increment(i) {
    i = n1 + n2
    return i++
}



// Event Handlers
document.querySelector('#calc').addEventListener('click', function(e) {
    var calcFunction = e.target.id,
        number1 = Number(document.querySelector('#number1').value),
        number2 = Number(document.querySelector('#number2').value);

    answer = window[calcFunction](number1, number2);

    document.querySelector('#answer').innerHTML = answer;
    // clear out input fields
    // document.querySelector('#number1').value = ''
    // document.querySelector('#number2').value = ''


});
