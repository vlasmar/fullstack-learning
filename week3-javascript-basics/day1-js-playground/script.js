let myName = "maria";
let age = 38;
let hobby = "puzzles";

myName = myName[0].toUpperCase() + myName.slice(1 , myName.length);
let hobbyLength = hobby.length;

console.log(
  `Hi! My name is ${myName}, I am ${age} years old and I love ${hobby}! \n ${hobby} has ${hobbyLength} letters.`
);
