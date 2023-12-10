function repete(){
    console.log("repete this after 1 sec");
    setTimeout(repete,1000);
}

repete();