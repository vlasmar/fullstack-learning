const form = document.getElementById("calculator");
const billInput = document.getElementById("bill-amount");
const tipSelect = document.getElementById("tip");
const personsInput = document.getElementById("persons");
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");
const result = document.getElementById("result");

const calculateTip = (bill, tip, people) => {
    const finalTip = (bill * tip) / people;
    return finalTip;
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipSelect.value);
    const persons = parseFloat(personsInput.value);

    if (!bill || !persons) return;

    
    const tip = calculateTip(bill, tipPercent, persons);
    output.classList.remove("hidden");
    result.innerHTML = `Tip Amount / person: ${tip}`;

    form.reset();
});
