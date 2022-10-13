const cardNumber = document.querySelector('.numbers')
const person = document.querySelector('.person')
const expiryMonth = document.querySelector('.expiry-month')
const expiryYear = document.querySelector('.expiry-year')
const securityCode = document.querySelector('.security-code')

const nameInput = document.getElementById('name')
const cardNumberInput = document.getElementById('card-number')
const expiryMonthInput = document.querySelector('.month')
const expiryYearInput = document.querySelector('.year')
const securityCodeInput = document.getElementById('security-code')
const submitBtn = document.getElementById('submit')

const form = document.querySelector('form')
const thankYou = document.querySelector('.thank-you')

const inputErrorMessage = document.querySelectorAll('.input-error-message')
const continueBtn = document.querySelector('.continue')

nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, '')
    person.innerText = nameInput.value
})

// Prevent space at the beginning of an input
// Source => https://stackoverflow.com/questions/50738490/prevent-a-white-space-in-the-beginning-of-a-input
function preventSpace(input){
    if(/^\s/.test(input.value))
      input.value = '';
}

cardNumberInput.addEventListener('input', () => {
    cardNumberInput.value = cardNumberInput.value.replace(/\D+/g, '').replace(/(.{4})/g, '$1 ').trim()
    cardNumber.innerText = cardNumberInput.value
})

expiryMonthInput.addEventListener('input', () => {
    expiryMonthInput.value = expiryMonthInput.value.replace(/\D+/g, '')
    expiryMonth.innerText = expiryMonthInput.value
})

expiryYearInput.addEventListener('input', () => {
    expiryYearInput.value = expiryYearInput.value.replace(/\D+/g, '')
    expiryYear.innerText = expiryYearInput.value
})

securityCodeInput.addEventListener('input', () => {
    securityCodeInput.value = securityCodeInput.value.replace(/\D+/g, '')
    securityCode.innerText = securityCodeInput.value
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    checkCardholderName()
    checkCardNumber()
    checkExpiryMonth()
    checkExpiryYear()
    checkSecurityCode()

    if (checkCardholderName() && checkCardNumber() && checkExpiryMonth() && checkExpiryYear() && checkSecurityCode()) {
        form.style.display = 'none'
        thankYou.style.display = 'block'
    }
})

function checkCardholderName() {
    if (nameInput.value.length < 5 || nameInput.value.length > 25) {
        nameInput.classList.add('input-error')
        inputErrorMessage[0].style.display = 'block'
    } else {
        nameInput.classList.remove('input-error')
        inputErrorMessage[0].style.display = 'none'
        return true
    }
}

function checkCardNumber() {
    if (cardNumberInput.value.length < 19) {
        cardNumberInput.classList.add('input-error')
        inputErrorMessage[1].style.display = 'block'
    } else {
        cardNumberInput.classList.remove('input-error')
        inputErrorMessage[1].style.display = 'none'
        return true
    }
}

function checkExpiryMonth() {
    if (expiryMonthInput.value.length < 2 || expiryMonthInput.value === '00' || expiryMonthInput.value > 12) {
        expiryMonthInput.classList.add('input-error')
        inputErrorMessage[2].style.display = 'block'
    } else {
        expiryMonthInput.classList.remove('input-error')
        inputErrorMessage[2].style.display = 'none'
        return true
    }
}

function checkExpiryYear() {
    let currentYear = new Date().getFullYear()
    let currentYearToString = currentYear.toString()

    let lastTwoNumbers = currentYearToString.replace('20', '')

    if (expiryYearInput.value.length < 2 || expiryYearInput.value === '00' || expiryYearInput.value < lastTwoNumbers) {
        expiryYearInput.classList.add('input-error')
        inputErrorMessage[2].style.display = 'block'
    } else {
        expiryYearInput.classList.remove('input-error')
        inputErrorMessage[2].style.display = 'none'
        return true
    }
}

function checkSecurityCode() {
    if (securityCodeInput.value.length < 3) {
        securityCodeInput.classList.add('input-error')
        inputErrorMessage[3].style.display = 'block'
    } else {
        securityCodeInput.classList.remove('input-error')
        inputErrorMessage[3].style.display = 'none'
        return true
    }
}

continueBtn.addEventListener('click', () => {
    form.style.display = 'block'
    thankYou.style.display = 'none'

    nameInput.value = ''
    cardNumberInput.value = ''
    expiryMonthInput.value = ''
    expiryYearInput.value = ''
    securityCodeInput.value = ''
})

