const fs = require("fs");

function ReadFromFile(fileName){
    fs.readFile(fileName, "utf-8", (err, data)=>{
        console.log(data);
    })

    for(let i=0 ; i<10000000000; i++){}

}

ReadFromFile("a.txt");