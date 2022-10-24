function palindrome(str) {

    str = str.toLowerCase();

    // return str === str.split('').reservse().join('');
    console.log(str)
    
    
}

const input = document.querySelector('#input')
const text = document.querySelector('#text')
const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {palindrome(input.value)})





