// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

// The murderer is Miss Scarlet - returning the string in line 8 followed by the constant scenario > murderer in line 2. 
// This is set as declareMurderer which is set as verdict. The verdict is printed via console.log.




// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// line 22 conflicts with line 25 in the first block. It would cause an error.



// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
// let murderer = 'Mrs. Peacock';
// return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// First Verdict: The murderer is Mrs. Peacock as line 1 is not a const, 45 remains.
// Second Verdict: The murderer is Proplum. Line 1 is used for line 52 as 52-53 is not affected by the 44-47 block.


// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
// let suspectThree = 'Colonel Mustard';
// return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// 63 and 66 are let but because of the const, it will remain as 66. 67 will return 61, 62, and 66.
// suspectThree in 72 is Mrs. Peacock because it's not part of the 65-68 block, even though this block is a const.




// Episode 5

// const scenario = {
// murderer: 'Miss Scarlet',
// room: 'Kitchen',
// weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
// scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
// return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// properties can be changed even with const. 96 > 88 > 85 > 89. Eventually returning Revolver on 93 and affecting
// the output on 97-98



// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     murderer = 'Mrs. White';
// }

// plotTwist();
// }

// const declareMurderer = function () {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ignore the let. 123 empties the variable 110 Mr. Green. Only 113 Mrs. White remains to output.



// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//     murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
// }

// plotTwist();
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// the const nested in the const supercedes the let? so output miss scarlet.
// ok it doesnt, i chased geese. does 138 - 149 have no bearing on outcome? 



// Episode 8

const scenario = {
murderer: 'Mrs. Peacock',
room: 'Conservatory',
weapon: 'Lead Pipe'
};

const changeScenario = function() {
scenario.murderer = 'Mrs. Peacock';
scenario.room = 'Dining Room';

const plotTwist = function(room) {
    if (scenario.room === room) {
    scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
    if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
    }
    }

    unexpectedOutcome('Colonel Mustard');
}

plotTwist('Dining Room');
}

const declareWeapon = function() {
return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Episode 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
// let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// idungeddit. something to do with {} or indentation?

// Extensions

// Make up your own episode!