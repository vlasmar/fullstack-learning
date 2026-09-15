const celsiusInput = document.getElementById('celsius');
const convertButton = document.getElementById('convertBtn');
const result = document.getElementById('result');

 convertButton.addEventListener('click', () => {
    const celsius = celsiusInput.value;
    if (celsius === '') {
        alert('Please put a valid temperature');
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    result.textContent = `${fahrenheit} °F`;
 });