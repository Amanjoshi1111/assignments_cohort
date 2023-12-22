/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time it takes to complete the entire operation.
 */


function waitOneSecond() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 1000, "one sec");
    })
}

function waitTwoSecond() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 2000, "two sec");
    })
}

function waitThreeSecond() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 3000, "three sec");
    })
}


function calculateTime() {
    // console.log(new Date());
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(res=> {
        console.log(res);
        console.log(new Date());
    });
}
console.log(new Date());
calculateTime();


// const beforeTime = new Date();