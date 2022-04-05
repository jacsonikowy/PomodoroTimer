const study1 = document.getElementById("study1")
const btn = document.querySelector("btn")

var minutes = sessionStorage.getItem("minutes")
let seconds = 60;

var isPaused = false;

function pause(){
    
    if(isPaused==false){
        isPaused=true
    } else {
        isPaused = false;
        timer();
    }   
}

function timer(){
    
    if(isPaused==false){
        minutes = parseInt(minutes)
        seconds = parseInt(seconds)
        
        if (seconds == 60){
            minutes--;
        }
        
        seconds--;
        
        if (seconds==0 && minutes==0) {
            window.open("break.html", "_self");
        } else if (seconds<10){
            study1.innerHTML = minutes + ":0" + seconds;
        } else if (minutes < 10 && seconds<10){
            study1.innerHTML = "0" + minutes + ":0" + seconds;
        } else if (minutes < 10){
            study1.innerHTML = "0" + minutes + ":" + seconds;
        } else {
            study1.innerHTML = minutes + ":" + seconds;
        }

        
        if(seconds==0){
            seconds=60;
        }

        setTimeout("timer()", 1000)
    }
}

window.onload = timer();
