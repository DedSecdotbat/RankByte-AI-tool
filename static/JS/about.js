window.onload=function(){
  engage();
commandPrompt();
}

//////////////////////////////////////
////       Gets Input command    /////
//////////////////////////////////////
function getCommand(){
var command=document.getElementById('command').value;
var main=document.getElementById('main');
switch (command) {
  case 'List':
  main.innerHTML="List of commannds:</br>List</br>Connect</br>Team.py</br>About.md</br>Features<br/>Engage</br>Ddos</br>Satellite</br>Clear</br></br>";
  commandPrompt();
  StopMatrix()
  break;
  
  case 'About.md':
  about();
  StopMatrix();
  break;

  case 'Features':
    features();
    StopMatrix();
    break;

  case 'Team.py':
  team();
  StopMatrix();
  break;
  
  case 'Clear':
    clear();
    StopMatrix();
  break;

  case 'Connect':
  connectServer();
  StopMatrix()
  break;

  case 'Engage':
  engage();
  commandPrompt();
    break;
  case 'Ddos':
  ddosAttack();
  StopMatrix();
    break;
  case 'Satellite':
  satellite();
  StopMatrix();
  break;
  default:
  defaultFunction();
  StopMatrix();
  
}
}


////////////////////////////////////////
////     Command Prompt            /////
////////////////////////////////////////
function commandPrompt(){
var main=document.getElementById("main");
var test=document.createElement("DIV");
main.appendChild(test);
test.innerHTML="</br> > RankByte@rank: <input id='command' type='text'/><input id='go' type='button'value='Go' onclick='getCommand()'/></br></br>";
}

////////////////////////////////////
////          Clear Command     ////
////////////////////////////////////
function clear(){
main.innerHTML="> RankByte@rank: <input id='command' type='text'/><input id='go' type='button'value='Go' onclick='getCommand()'/></br></br>";
}

///////////////////////////////////////////
////    Connect Commmand               ////
///////////////////////////////////////////
function connectServer(){
main.innerHTML="connecting...";
progressBar();
setTimeout(connected,10000);
}
function connected(){
var connected=document.createElement("div");
main.appendChild(connected);
connected.innerHTML="</br>connected to the server</br>";
commandPrompt();
}

///////////////////////////////////
////       Team.py Command     /////
///////////////////////////////////

function team(){
  main.innerHTML = "Reading Team Detail's";
  progressBar();
  setTimeout(teamDetails,10000)
}
function teamDetails(){
  var TeamDetails=document.createElement("div");
  main.appendChild(TeamDetails);
  TeamDetails.innerHTML="</br>RankByte is developed by Team DedSec.bat, the team members are bunch of nerds<br/>who loves to Create Complex AI / ML Algorithms Team Members Page is Getting<br/>Developed Untill that remember the names: <br/><br/> SHREY<br/>Vijay<br/>Meet<br/>Vedant<br/>Vraj<br/>Dhyani</br>";
  commandPrompt();
  }
  
///////////////////////////////////
////       About.md Command     /////
///////////////////////////////////

function about(){
  main.innerHTML = "Reading About Detail's from Server which is hacked by CBI and 69 Others jk:)";
  progressBar();
  setTimeout(aboutDetails,10000)
}
function aboutDetails(){
  var AboutDetails=document.createElement("div");
  main.appendChild(AboutDetails);
  AboutDetails.innerHTML="</br>RankByte was developed For the Ranking and Prediction of Rank of Colleges and Universities in INDIA,<br> on the basis of Student-Faculty Ratio and Hostel and Laboratory Facilites, Moreover the Complex Algorithm<br>works on Logical and Collabrative Filtering of Data by its Sentiment Analysis. Use of Various new Algorithm<br>Practices which are developed by SHREY and Meet for this Product.</br>";
  commandPrompt();
}
  
  
///////////////////////////////////
////       features Command     /////
///////////////////////////////////

function features(){
  main.innerHTML = "Reading About Detail's from Server which is hacked by CBI and 69 Others jk:)";
  progressBar();
  setTimeout(featuresDetails,10000)
}
function featuresDetails(){
  var featuresDetails=document.createElement("div");
  main.appendChild(featuresDetails);
  featuresDetails.innerHTML="</br>RankByte is the first Product with the accuracy of nearly about 99.94% which make us say People dont like to be sold, but they love to buy ! Feature page will be soon Updated!  </br>";
  commandPrompt();
  }
  



///////////////////////////////////
////       Engage Command     /////
///////////////////////////////////
function engage(){
main.innerHTML="<canvas id='q' width='500' height='200'>sorry browser dont't support</canvas></br></br></br>";
var s=window.screen;
var width = 500;
var height = 200;
var yPositions = Array(300).join(0).split('');
var ctx=q.getContext('2d');
var draw = function () {
ctx.fillStyle='rgba(0,0,0,.05)';
ctx.fillRect(0,0,width,height);
ctx.fillStyle='#0F0';
ctx.font = '10pt Georgia';
yPositions.map(function(y, index){
  text = String.fromCharCode(1e2+Math.random()*33);
  x = (index * 10)+10;
  q.getContext('2d').fillText(text, x, y);
if(y > 100 + Math.random()*1e4)
{
  yPositions[index]=0;
}
else
{
    yPositions[index] = y + 10;
}
});
};
RunMatrix();
function RunMatrix()
{
if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
  Game_Interval = setInterval(draw, 33);
}
}
function StopMatrix()
{
clearInterval(Game_Interval);
}


///////////////////////////////////
////         Ddos Command     /////
///////////////////////////////////
function ddosAttack(){
main.innerHTML="Enter url of website to attack:<input id='url' type='text'><input id='attackDdos' type='button'value='Go' onclick='ddos()'>"
}
function ddos(){
var ddos=document.createElement("div");
var main=document.getElementById('main');
main.appendChild(ddos);
var url=document.getElementById('url').value;
var main=document.getElementById('main');
var ping=document.createElement("div");
main.appendChild(ping);
ping.innerHTML="ping..."+url+"</br>connecting...</br>";
progressBar();
setTimeout(uploadVirus,10000);
setTimeout(success,20000);
setTimeout(commandPrompt,21000);
}


function success(){
var success=document.createElement("div");
main.appendChild(success);
success.innerHTML="attack success......</br> the site is down for 20 minutes....";
}
function uploadVirus(){
var virus=document.createElement("div");
main.appendChild(virus);
virus.innerHTML="Uploading Virus...</br>";
progressBar();
}




///////////////////////////////////
////     Satellite Command    /////
///////////////////////////////////
function satellite(){
main.innerHTML="Searching nearby satellites...";
progressBar();
setTimeout(nearbySatellite,11000);
setTimeout(killSat,12000);
}
function nearbySatellite(){
var sat=document.createElement("div");
main.appendChild(sat);
sat.innerHTML="satellites found...</br>1.Skynet</br>2.ISS Sat</br>3.CartoSat-1</br>4.CartoSat-2</br>5.Resource Sat</br>6.Sputnik</br>7.Mir</br>8.SkyLab</br>";
}
function killSat(){
var sat=document.createElement("div");
main.appendChild(sat);
sat.innerHTML="mass destruction...<input type='button' value='Yes' onclick='massDestruction()'/> <input type='button' value='No' onclick='massDestructionCancel()'/>";
}
function massDestruction(){
var destruction=document.createElement("div");
main.appendChild(destruction);
destruction.innerHTML="Initiating mass destruction...";
progressBar();
setTimeout(fire,11000);
}
function fire(){
var fire=document.createElement("div");
main.appendChild(fire);
fire.innerHTML="</br></br><img src='https://letscelebratenow.000webhostapp.com/images/boom.gif'></br></br>Mass destruction Successful...";
setTimeout(commandPrompt,2000);
}
function massDestructionCancel(){
var abortDestruction=document.createElement("div");
main.appendChild(abortDestruction);
abortDestruction.innerHTML="</br></br><img src='https://letscelebratenow.000webhostapp.com/images/angel.gif'></br></br>Mass destruction aborted...";
setTimeout(commandPrompt,2000);
}




///////////////////////////////////
////        Progress Bar      /////
///////////////////////////////////
function progressBar(){
var connect=document.createElement("div");
main.appendChild(connect);
connect.innerHTML="<div id='connect'><div class='progressBar'></div></div><style media='screen'>.progressBar{height:10px;background:#000;width: 50%;animation: progressBarAnim 10s 1 0s;}@keyframes progressBarAnim {0%{ width: 0%; } 20%{width:5%;}50%{ width: 20%;}75%{ width:25%;} 85%{ width:35%;}90%{ width:40%;}100%{width: 50%;}}</style>";
}

///////////////////////////////////
////       Default Function   /////
///////////////////////////////////
function defaultFunction(){
main.innerHTML="Please enter command with first letter in capital</br>For list of supported commands type List";
commandPrompt();
}
