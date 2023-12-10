let count = 0;

function printCounter(){
    console.log(count++);
    setTimeout(printCounter, 1000);
}

printCounter();