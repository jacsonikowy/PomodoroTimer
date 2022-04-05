const study = document.getElementById("study")
const breakTime = document.getElementById("breakTime")

var baseStudyTime = 25;
var baseBreakTime = 5;


function addMinuteStudy(){
    
    baseStudyTime = parseInt(baseStudyTime)
    baseStudyTime++;
    study.innerHTML = baseStudyTime + ":00"
}

function addMinuteBreak(){
    baseBreakTime = parseInt(baseBreakTime)
    baseBreakTime++;
    breakTime.innerHTML = baseBreakTime + ":00"
}

function subMinuteStudy(){
    baseStudyTime = parseInt(baseStudyTime)
    baseStudyTime--;
    study.innerHTML = baseStudyTime + ":00"
}

function subMinuteBreak(){
    baseBreakTime = parseInt(baseBreakTime)
    baseBreakTime--;
    breakTime.innerHTML = baseBreakTime + ":00"
}

function startTimer(){
    sessionStorage.setItem("minutes", baseStudyTime)
    sessionStorage.setItem("minutesBreak", baseBreakTime)
    window.open("Study.html", "_self")
}