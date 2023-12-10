function showCurrentTime(){
    const currTime = new Date();
    let hour = currTime.getHours();
    let zone = "AM";
    if(hour > 12){
        hour = hour - 12;
        zone = "PM";
    }
    const min = currTime.getMinutes();
    const sec = currTime.getSeconds();

    console.log(`${hour}:${min}:${sec} ${zone}`);

    setTimeout(showCurrentTime,1000);
}

showCurrentTime();