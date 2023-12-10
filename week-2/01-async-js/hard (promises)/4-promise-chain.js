/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 1000, "one second");
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 2000, "two second");
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 3000, "three second");
    })
}

function calculateTime() {
    waitOneSecond().then((res)=>{
        console.log(res);
        waitTwoSecond().then(res=>{
            console.log(res);
            waitThreeSecond().then(res=>{
                console.log(res);
                console.log(new Date());
            })
        })
    });

}

console.log(new Date());
calculateTime();