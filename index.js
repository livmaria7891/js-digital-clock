// Your code here
var time = new Date(Date.now());
var hour = time.getHours();
var minute = time.getMinutes();
var seconds = time.getSeconds();

var changeTime = function(){
  nIntervId = setInterval(addSecond, 1000);
};

var addSecond = function(){
  if (seconds < 59){
    seconds += 1;
    $('#clock').html("<p>" + hour + ":" + minute + ":" + seconds + "</p>");
  }else{
    seconds = 0;
    addMinute();
  }
};

var addMinute = function(){
  if (minute < 59){
    minute += 1;
    $('#clock').html("<p>" + hour + ":" + minute + ":" + seconds + "</p>");
  }else{
    minutes = 0;
    addHour();
  }
};

var addHour = function(){
  if(hour < 23){
    hour+=1;
    $('#clock').html("<p>" + hour + ":" + minute + ":" + seconds + "</p>");
  }else{
    hour = 0;
  }
};

$( document ).ready(function(){
  $('#clock').html("<p>" + hour + ":" + minute + ":" +seconds + "</p>");
  changeTime();
});
