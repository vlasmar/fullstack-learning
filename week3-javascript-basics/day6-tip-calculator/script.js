const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const button = document.querySelector('.submit');
const result = document.querySelector('.result');   

function calculateTotal(amount, percent){
    const total = amount + ((percent/100) * amount);
    return total;
}

button.addEventListener('click', () => {
    const bill = Number(billInput.value);
    const tipPercent = Number(tipInput.value);
    if (bill <= 0 || tipPercent < 0) {
        result.textContent = 'Please correct your input.';
        result.style.color = 'red';
    } else {
        result.innerHTML = '';
        const totalAmount = calculateTotal(bill, tipPercent);
        const paragraph = document.createElement('p');
        paragraph.textContent = `Tip: ${tipPercent}% Total: ${totalAmount}`;
        paragraph.style.color = 'blue';
        result.appendChild(paragraph);
    }
});