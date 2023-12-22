/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(n) {

    let currentDate = new Date();
    const afterDate = new Date().setSeconds(currentDate.getSeconds() + n * 1);

    while (currentDate < afterDate) {
        currentDate = new Date();
    }

}

sleep(2);
console.log("after");
function sleep(milliseconds) {
}

module.exports = sleep;
