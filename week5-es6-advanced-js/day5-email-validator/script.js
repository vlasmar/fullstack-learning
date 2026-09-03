const emailInput = document.getElementById('email');
const validateButton = document.getElementById('validate-button');
const resultMessage = document.getElementById('result');

validateButton.addEventListener('click', () => {
    if (!emailInput.value) {
        resultMessage.textContent = 'Please enter an email address.';
        resultMessage.classList.remove('valid');
        resultMessage.classList.add('invalid');
        return;
    }
    
    const email = emailInput.value.trim();
    const regex = /[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z]+/;
    const isValid = regex.test(email);
    if (isValid) {
        resultMessage.textContent = 'Valid email address.';
        resultMessage.classList.remove('invalid');
        resultMessage.classList.add('valid');
    } else {
        resultMessage.textContent = 'Invalid email address.';
        resultMessage.classList.remove('valid');
        resultMessage.classList.add('invalid');
    }
});