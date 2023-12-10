/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
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