let userAnswer;
let score = 0;

function game(){
    userAnswer = window.prompt(`Question 1`);
    if (userAnswer.toLowerCase() === 'd') {
        console.log('You are right!')
        score++;
    } else {
        console.log(`Wrong! The right answer is d`);
    }

    userAnswer = window.prompt(`Question 2`);
    if (userAnswer.toLowerCase() === 'b') {
        console.log('You are right!')
        score++;
    } else {
        console.log(`Wrong! The right answer is b`);
    }

    userAnswer = window.prompt(`Question 3`);
    if (userAnswer.toLowerCase() === 'c') {
        console.log('You are right!')
        score++;
    } else {
        console.log(`Wrong! The right answer is c`);
    }

    alert(`You scored ${score}/3`);
}

game()