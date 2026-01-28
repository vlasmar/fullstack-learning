let counter = document.querySelector('.count');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const resetButton = document.querySelector('.reset');
const para = document.querySelector('.negative');
let count = 0;

function increase () {
    if (count >= 0){
        count++;
        counter.innerHTML = count;
    } else {
        count = 1;
        counter.innerHTML = count;
        para.style.display = 'none';
    }
}

function decrease () {
    count--;
    if (count < 0){
        para.style.display = 'block';
    } else {
        counter.innerHTML = count;
        para.style.display = 'none';
    }
}

function reset () {
    count = 0;
    counter.innerHTML = count;
}

plus.addEventListener("click", increase);
minus.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);
