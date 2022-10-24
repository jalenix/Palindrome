const input = document.querySelector('#input')
const text = document.querySelector('#text')
const submitBtn = document.querySelector('#submit')

function palindrome(str) {
    const result = str === str.split('').reverse().join('')
    text.innerHTML = result ? `${str} является палиндромом` : `${str} не является палиндромом`
}

submitBtn.addEventListener('click', function() {palindrome(input.value)})





