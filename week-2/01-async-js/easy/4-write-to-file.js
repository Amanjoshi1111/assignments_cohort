const fs = require("fs");


function writeInFile(fileName, data){
    fs.appendFile(fileName, data, (err, otherparam)=>{
        console.log(err);
        console.log(otherparam);
    })
}

writeInFile("a.txt", "aaj din chadeya");