var displayIN=document.getElementById('display-IN');
var displayUS=document.getElementById('display-US');
var displayJP=document.getElementById('display-JP');
var displayRS=document.getElementById('display-RS');
var displayLN=document.getElementById('display-LN');
var displaySY=document.getElementById('display-SY');


function updateTime(){
    var timeIN=moment().format('hh:mm:ssA');
    var timeUS=moment.tz('America/Los_Angeles').format('hh:mm:ssA');
    var timeJP=moment.tz('Japan/Tokyo').format('hh:mm:ssA');
    var timeRS=moment.tz('Russia/Moscow').format('hh:mm:ssA');
    var timeLN=moment.tz('Europe/London').format('hh:mm:ssA');
    var timeSY=moment.tz('Australia/Sydney').format('hh:mm:ssA');

    displayIN.textContent=timeIN;
    displayUS.textContent=timeUS;
    displayJP.textContent=timeJP;
    displayRS.textContent=timeRS;
    displayLN.textContent=timeLN;
    displaySY.textContent=timeSY;

}
setInterval(updateTime,1000);
updateTime();