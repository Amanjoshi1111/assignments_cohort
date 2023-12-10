const fs = require("fs");

function removeSpaces(fileName){

    fs.readFile(fileName, "utf-8", (err, data)=>{

        data = data.replace(/\s+/g," ");
        data = data.trim();

        fs.writeFile(fileName, data, (err)=>{});
    })
}

removeSpaces("a.txt");