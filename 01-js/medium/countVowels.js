/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase();

    let charaters = str.split("");
    let count = 0;

    charaters.forEach(element => {
        const vowels = ["a","e","i","o","u"];
        if(vowels.includes(element)){
            count++;
        }
    });

    return count;
}

module.exports = countVowels;