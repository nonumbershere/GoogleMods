/**
  * Made by: Lapide
  * For: Chrome Dino
  * Payment: false
  * Paid: false
  * free: true
  * Illegal: false
  * Legal: true
  * Created With: JAVASCRIPT
*/
// Enjoy!
// Colors
var pink = 'pink';
var olive = 'olive';
var marine = 'marine';
var emerald = 'emerald';
var lavender ='lavernder';
var grass = 'grass';
var cyan = 'cyan';
var apple = 'apple';
var magenta = 'magenta';
var purple = 'purple';
var orange = 'orange';
var darkgreen = 'darkgreen';
var lightgreen = 'lightgreen';
var red = 'red';
var blue = 'blue';
var lightblue = 'lightblue';
var darkred = 'darkred';
var darkblue='darkblue';
var yellow = 'yellow';
var green = 'green';
var darkgreen = 'darkgreen';
var lightred = 'lightred';
var white = 'white';
var black ='black';
var brown = 'brown';
var gray = 'gray';
var lime = 'lime';
// now for the HACK!
var Xtreme = {
 turnOffArcadeMode: function() {
 Runner.instance_.isArcadeMode = function(){}
Runner.instance_.setArcadeMode = function(){}
 },
 freshAlert: function(title, msg){
  function p() {
   r.style.transition = '2s';
r.style.opacity='0'
   setTimeout(function(){r.remove()}, 1000);
}
var r = document.createElement('div');
r.innerHTML='<div style="-webkit-font-smoothing: antialiased;color: #555;font-size: 1em;line-height: 1.5;cursor: auto;box-sizing: inherit;display: flex;position: fixed;z-index: 1060;top: 0;right: 0;bottom: 0;left: 0;flex-direction: row;justify-content: center;padding: .625em;overflow-x: hidden;transition: background-color .1s;-webkit-tap-highlight-color: transparent;transition:2s;background: rgba(0,0,0,.4);align-items: center;overflow-y: auto;"><div style="height: 200px; border-radius: 8px; width: 500px; background: white; color: lightgrey; transistion: font-weight: bolder;"><h1><center>'+title+'</center></h1><h1></h1><h1></h1><center><h2>'+msg+'</h2></center><button style="weight:50px; height: 50px;position: absolute;left: 658px;background: grey; float: left;" onclick="p();">OK</button></div></div>';
document.body.background='red';
document.body.prepend(r);
 },
 turnOnArcadeMode: function() {
  Runner.instance_.isArcadeMode = Runner.prototype.isArcadeMode;
Runner.instance_.setArcadeMode = Runner.prototype.setArcadeMode;
  Runner.instance_.setArcadeMode();
 },
   help: function(withwhat) {
     console.log('Help commands:');
     console.log('usePackage: Helps you to use Xtreme.usePackage!');
     console.log('usecustom: Like usePackage but it dosent customize a element. It customizes a body.')
if (withwhat == 'usecustom') {
     console.log('COMMANDS:');
    console.log('rainbow: Makes the background rainbow!');
}
if (withwhat == 'usePackage') {
    console.log('COMMANDS: ')
    console.log('basicMiscs: Adds more to Xtreme.Miscs!');
    console.log('INCLUDES: ');
    console.log('Alright, before we begin Includes are for LIKE addons for usePackage, so here: ');
    console.log('septremelog: Includes the LOG command.');
} 
},
    Credits: function credits() {
       console.log('Creator: Lapide');
 },
 MoreSpeed: function e() {
        ++Runner.instance_.currentSpeed
},
 MoreMoreSpeed: function e() {
       Runner.instance_.setSpeed(100);
},
 SetSpeed: function e(speed) {
     Runner.instance_.setSpeed(speed);
},
  GodMode: function e() {
        Runner.instance_.gameOver=function(){}
},
 DisableGodMode: function e() {
       var main = Runner.prototype.gameOver
       Runner.instance_.gameOver=main
},
 gravity: function e(gravity) {
    Runner.instance_.tRex.config.GRAVITY=gravity;
},
 customSkin: function e(skinID) {
     document.querySelector("#offline-resources-1x").src=skinID;
     document.querySelector("#offline-resources-2x").src=skinID;
},
 colorFullSkin: function e(){ document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true";document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true"
                            },
 killChrome: function e(){
document.location.href=''
                         },
 useCustom: function(type) {
        if (type == 'rainbow') {
                        function flash() {
            document.body.style.transition='2s ease 0s';
            document.body.style.background='red';
setTimeout(function(){document.body.style.background='blue';}, 1000);
setTimeout(function(){document.body.style.background='yellow';}, 2000);
setTimeout(function(){document.body.style.background='purple';}, 3000);
setTimeout(function(){document.body.style.background='green';}, 4000);
setTimeout(function(){document.body.style.background='lightgreen';}, 5000);
setTimeout(function(){document.body.style.background='brown';}, 6000);
setTimeout(function(){document.body.style.background='';}, 7000);
setTimeout(function(){document.body.style.background='black';}, 8000);
setTimeout(function(){document.body.style.background='red';}, 9000);
setTimeout(function(){flash();}, 9000);
                 }
flash();
}
},
alertBox: function alertBox(msg, title, color) {
var alertbox = document.createElement('div');
setTimeout(function(){alertbox.remove();}, 5000);
alertbox.innerHTML='<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>.alert {  padding: 20px; background-color: '+color+';  color: white;}.closebtn {  margin-left: 15px;  color: white; font-weight: bold;  float: right; font-size: 22px;  line-height: 20px;  cursor: pointer;  transition: 0.3s;}.closebtn:hover {  color: black;}</style></head><body><div class="alert"> <span class="closebtn" onclick="this.parentElement.style.display="none";">&times</span>   <h1 style="font-weight: bold;">'+title+' </h1>'+msg+'</div></body></html>';
document.body.append(alertbox);
document.querySelector("body > div > div > span").addEventListener('click',function() {
      alertbox.remove();
});
},
 removeMsgOfflineBox: function() {
      document.querySelector("#main-message").remove();  
},
 hideMsgOfflineBox: function() {
    document.querySelector("#main-message").hidden=true;
},
 showMsgOfflineBox: function() {
   document.querySelector("#main-message").hidden=false;
},
 editTitle: function(msg) {
   document.querySelector("#main-message > h1 > span").innerText=msg;
 },
  editFullDescription: function(msg) {
     document.querySelector("#error-information-popup-content").innerText=msg;
},
 editDescription1: function(msg) {
      document.querySelector("#suggestions-list > p").innerText=msg;
},
 editDescription2: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(1)").innerText=msg;
},
 editDescription3: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(2)").innerText=msg;
},
editDescription4: function(msg) {
   document.querySelector("#error-information-popup-content > div.error-code").innerText=msg;
},
  editDescription5: function(msg) {
     document.querySelector("#suggestions-list > ul").innerText=msg;
},
editTabTitle: function(newtitle) {
     document.title=newtitle;
},
turnoneditmode: function() {
    document.designMode='on';
},
turnoffeditmode: function() {
    document.designMode='off';
},
Miscs: function(){},
usePackage: function(PackageName, include) { // Just do basicMiscs for now!
  if (PackageName == 'basicMiscs') {
    Xtreme.alertBox('Unlocked Miscs Basic Package.', 'Unlocked', 'red');
    Xtreme.Miscs.Credits = function() {
      Xtreme.SuccesLog('Creator Of Package: Lapide');
      Xtreme.SuccesLog('Thank you for using packages! You may now check your Miscs package ', PackageName);
      }
      Xtreme.Misc.useMoreRunner = function(whatCommand) {
              Runner.instance_.Credits = function() {
                console.log('Hack by lapide!');
              }
      };
      Xtreme.Miscs.easterEggs = function(taskname) {
              if (taskname == 'sep true') {
                console.log('Ayy! i will add a septreme Package!')
              }
      };
      Xtreme.Miscs.gamoveover = function() {
           Runner.instance_.gameOver();
      };
      Xtreme.Miscs.Spam = function(spamMsg) {
        console.log(spamMsg);
        Xtreme.Miscs.Spam(spamMsg);
      };
      Xtreme.Miscs.RemoveCode = function(){
        delete Xtreme == true;
      };
    if (include == 'septremeLog') {
      console.log('Alerted: Succses!');
      Xtreme.Miscs.Console = function(msg, data) {
        console.log(msg, data);
      }
    }
  }
},
   customCredits: function(creator, color, size, padding, backgroundcolor) {
    console.log('%cCreator: '+creator+'', 'color: '+color+'; font-size: '+size+'; padding: '+padding+'; background-color: '+backgroundcolor+';');
 }
}
Xtreme.Miscs.Runner=Runner;
clear();
/*
   Made by: Lapide
   For: Chrome Dino
*/
// Enjoy!
var Xtreme = {
   help: function(withwhat) {
     console.log('Help commands:');
     console.log('usePackage: Helps you to use Xtreme.usePackage!');
     console.log('usecustom: Like usePackage but it dosent customize a element. It customizes a body.')
if (withwhat == 'usecustom') {
     console.log('COMMANDS:');
    console.log('rainbow: Makes the background rainbow!');
}
if (withwhat == 'usePackage') {
    console.log('COMMANDS: ')
    console.log('basicMiscs: Adds more to Xtreme.Miscs!');
    console.log('INCLUDES: ');
    console.log('Alright, before we begin Includes are for LIKE addons for usePackage, so here: ');
    console.log('septremelog: Includes the LOG command.');
} 
},
    Credits: function credits() {
       console.log('Creator: Lapide');
 },
 MoreSpeed: function e() {
        ++Runner.instance_.currentSpeed
},
 MoreMoreSpeed: function e() {
       Runner.instance_.setSpeed(100);
},
 SetSpeed: function e(speed) {
     Runner.instance_.setSpeed(speed);
},
  GodMode: function e() {
        Runner.instance_.gameOver=function(){}
},
 DisableGodMode: function e() {
       var main = Runner.prototype.gameOver
       Runner.instance_.gameOver=main
},
 gravity: function e(gravity) {
    Runner.instance_.tRex.config.GRAVITY=gravity;
},
 customSkin: function e(skinID) {
     document.querySelector("#offline-resources-1x").src=skinID;
     document.querySelector("#offline-resources-2x").src=skinID;
},
 colorFullSkin: function e(){ document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true";document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Skinz4ChromeDino/blob/master/COLORED/ColoredTrexPack.png?raw=true"
                            },
 killChrome: function e(){
document.location.href=''
                         },
 useCustom: function(type) {
        if (type == 'rainbow') {
                        function flash() {
            document.body.style.transition='2s ease 0s';
            document.body.style.background='red';
setTimeout(function(){document.body.style.background='blue';}, 1000);
setTimeout(function(){document.body.style.background='yellow';}, 2000);
setTimeout(function(){document.body.style.background='purple';}, 3000);
setTimeout(function(){document.body.style.background='green';}, 4000);
setTimeout(function(){document.body.style.background='lightgreen';}, 5000);
setTimeout(function(){document.body.style.background='brown';}, 6000);
setTimeout(function(){document.body.style.background='';}, 7000);
setTimeout(function(){document.body.style.background='black';}, 8000);
setTimeout(function(){document.body.style.background='red';}, 9000);
setTimeout(function(){flash();}, 9000);
                 }
flash();
}
},
alertBox: function alertBox(msg, title, color) {
var alertbox = document.createElement('div');
setTimeout(function(){alertbox.remove();}, 5000);
alertbox.innerHTML='<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>.alert {  padding: 20px; background-color: '+color+';  color: white;}.closebtn {  margin-left: 15px;  color: white; font-weight: bold;  float: right; font-size: 22px;  line-height: 20px;  cursor: pointer;  transition: 0.3s;}.closebtn:hover {  color: black;}</style></head><body><div class="alert"> <span class="closebtn" onclick="this.parentElement.style.display="none";">&times</span>   <h1 style="font-weight: bold;">'+title+' </h1>'+msg+'</div></body></html>';
document.body.append(alertbox);
document.querySelector("body > div > div > span").addEventListener('click',function() {
      alertbox.remove();
});
},
 removeMsgOfflineBox: function() {
      document.querySelector("#main-message").remove();  
},
 hideMsgOfflineBox: function() {
    document.querySelector("#main-message").hidden=true;
},
 showMsgOfflineBox: function() {
   document.querySelector("#main-message").hidden=false;
},
 editTitle: function(msg) {
   document.querySelector("#main-message > h1 > span").innerText=msg;
 },
  editFullDescription: function(msg) {
     document.querySelector("#error-information-popup-content").innerText=msg;
},
 editDescription1: function(msg) {
      document.querySelector("#suggestions-list > p").innerText=msg;
},
 editDescription2: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(1)").innerText=msg;
},
 editDescription3: function(msg) {
document.querySelector("#suggestions-list > ul > li:nth-child(2)").innerText=msg;
},
editDescription4: function(msg) {
   document.querySelector("#error-information-popup-content > div.error-code").innerText=msg;
},
  editDescription5: function(msg) {
     document.querySelector("#suggestions-list > ul").innerText=msg;
},
editTabTitle: function(newtitle) {
     document.title=newtitle;
},
turnoneditmode: function() {
    document.designMode='on';
},
turnoffeditmode: function() {
    document.designMode='off';
},
Miscs: function(){},
usePackage: function(PackageName, include) { // Just do basicMiscs for now!
  if (PackageName == 'basicMiscs') {
    Xtreme.alertBox('Unlocked Miscs Basic Package.', 'Unlocked', 'red');
    Xtreme.Miscs.Credits = function() {
      Xtreme.SuccesLog('Creator Of Package: Lapide');
      Xtreme.SuccesLog('Thank you for using packages! You may now check your Miscs package ', PackageName);
      }
      Xtreme.Misc.useMoreRunner = function(whatCommand) {
              Runner.instance_.Credits = function() {
                console.log('Hack by lapide!');
              }
      };
      Xtreme.Miscs.easterEggs = function(taskname) {
              if (taskname == 'sep true') {
                console.log('Ayy! i will add a septreme Package!')
              }
      };
      Xtreme.Miscs.gamoveover = function() {
           Runner.instance_.gameOver();
      };
      Xtreme.Miscs.Spam = function(spamMsg) {
        console.log(spamMsg);
        Xtreme.Miscs.Spam(spamMsg);
      };
      Xtreme.Miscs.RemoveCode = function(){
        delete Xtreme == true;
      };
    if (include == 'septremeLog') {
      console.log('Alerted: Succses!');
      Xtreme.Miscs.Console = function(msg, data) {
        console.log(msg, data);
      }
    }
  }
},
choose: function choose(arr) {return arr[Math.floor(Math.random()*arr.length)];}, // Stolen from cookie clicker XD
   customCredits: function(creator, color, size, padding, backgroundcolor) {
    console.log('%cCreator: '+creator+'', 'color: '+color+'; font-size: '+size+'; padding: '+padding+'; background-color: '+backgroundcolor+';');
 },
 Points: function(anythinglessthan99999) {
     if (anythinglessthan99999 > 100000) {
      alert("Nah dude it can't be like dat XD");
     } else {
      Runner.instance_.distanceRan = anythinglessthan99999 / Runner.instance_.distanceMeter.config.COEFFICIENT
     }
 },
 scoreFlash: function(boolean) {
     console.log('Boolean, A boolean is an TRUE or FALSE. Type TRUE to get the flashy thing OR type FALSE to disable it.');
     Runner.instance_.distanceMeter.achievement=boolean;
 },
 scoreFlash2: function() {
  Runner.instance_.distanceMeter.flashHighScore()
},
breakGame: function(){
  Runner.instance_.stopListening();
},
pauseGame: function(){
     Runner.instance_.stop();
},
pauseGame2: function() {
  Runner.instance_.setPlayStatus(false);
Runner.instance_.paused = true;
cancelAnimationFrame(Runner.instance_.raqId);
Runner.instance_.raqId = 0
},
 flashBoth: function() {
  Runner.instance_.distanceMeter.flashHighScore();
  Runner.instance_.distanceMeter.achievement=true
 },
 Runner: Runner,
 RunnerPrototype: Runner.prototype,
instance: Runner.instance_,
keyboardGamePlay: function() {
  console.log('This uses the W-A-S-D keys.');
  Runner.keycodes.JUMP={32: 1, 87: 1, 38: 1}
Runner.keycodes.DUCK={40: 1, 83: 1}
Runner.keycodes.RESTART={82: 1}
},
XtremeKeyboard: function(){
  Runner.keycodes.JUMP={32: 1, 87: 1, 38: 1}
Runner.keycodes.DUCK={40: 1, 83: 1}
Runner.keycodes.RESTART={82: 1}
document.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 37:
    --Runner.instance_.currentSpeed
   break;
   case 68:
   ++Runner.instance_.currentSpeed
   break;
   case 65:
   --Runner.instance_.currentSpeed
   break;
    case 39:
 ++Runner.instance_.currentSpeed
break;
    }
  });
},
 AFKPoints: function(){
  Runner.instance_.gameOver=function(){}
Runner.instance_.playingIntro=true;
Runner.instance_.setSpeed(100);
console.log('Press F to stop. And B to start.');
document.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 70:
    Runner.instance_.gameOver=Runner.prototype.gameOver;
Runner.instance_.playingIntro=false;
Runner.instance_.setSpeed(5);
console.log('Done!');
   break;
   case 66:
   Runner.instance_.gameOver=function(){}
Runner.instance_.playingIntro=true;
Runner.instance_.setSpeed(100);
   break;
 }
});
},
removeGodMode: function(){},
userGodMode: Runner.prototype.gameOver,
nightMode: function(){ 
  Runner.instance_.isDarkMode=true;
  document.body.style.background='black';
  Runner.instance_.inverted=true;
},
showStart: function() {
  Runner.instance_.inverted=true;
},
hideStarts: function() {
  Runner.instance_.inverted=false;
},
dayMode: function() {
  Runner.instance_.isDarkMode=false;
document.body.style.background='white';
  Runner.instance_.inverted=false;
},
startGame: function() {
  Runner.instance_.startGame();
},
randomEvent: () =>{
     document.write(Xtreme.choose(["yo mama xD", "die die die jk.", 'runner "is gay"', 'rip yo mama', 'Facts: <h2>YOUR COOL</h2>']));
},
randomAlert: () =>{
  alert(Xtreme.choose(["Welcome, to xtreme!", 'lol xd', 'punk 1v1 me gay bword', 'jk', 'run. ', 'rip', 'rip', 'rip', 'rip', 'THIS IS A LENGENDARY TEXT!']));
},
reasonOfRandom: () =>{
  console.log('The reason of it is to piss off orteil')
},
noArcadeMode: () =>{
  Xtreme.editTabTitle('chrome://dino');
},
ArcadeMode: () =>{
  Runner.instance_.setArcadeMode(true);
},
ArcadeModeOFF: () =>{
  Runner.instance_.setArcadeMode(false);
},
Ji: function(){

},
XtremeJiLoaded: function(y) {
    if (y == 'gmer') {
      var r = document.createElement('div');
         Xtreme.alertBox('Succses!', 'Succses: ', 'green');
         Xtreme.Ji.CreatedBox = Xtreme.alertBox;
      document.body.append(r);
    }
    if (y == 'loadAssets') {
      Xtreme.Ji.XtremeLoader = function(load) {
        if(load == 'yes') {
          Xtreme.Ji.addEvents = function(boolean) {
               if (boolean == true) {
                var r = document.createElement('div');
                setTimeout(function(){r.remove()}, 7000);
                r.innerHTML='<p style="color: green; background-color: lightblue;">Made With Xtreme.</p>';
                document.body.append(r);
               } else {
                console.log('Subject Unressbolnaed-');
               }
          }
        }
        if(load == 'no') {
          alert('Example has been taken.')
        }
      }
   }
},
 activ: 0,
 null: null,
 changeJumpheight: function(jump_height, speed) {
    Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY = -jump_height;
    Runner.instance_.tRex.config.DROP_VELOCITY = -jump_height / speed
 },
 XtremeConsole: function(oldCons, data){
    return {
        log: function(text, data){
            oldCons.log(text, data);
            // Your code
        },
        info: function (text) {
            oldCons.info(text, data);
            // Your code
        },
        warn: function (text) {
            oldCons.warn(text);
            // Your code
        },
        error: function (text) {
            oldCons.error(text);
            // Your code
        },
      SuccesLog: function sec(msg) {
        console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: lightgreen;', 'color: green', 'color: darkgreen', 'color: green;', 'color: lightgreen'); 
},
   ErrorLog: function e(msg) {
      console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: red;', 'color: red', 'color: darkred', 'color: red;', 'color: red'); 
},
  WarningLog: function f(msg) {
      console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: yellow;', 'color: yellow', 'color: darkgreen', 'color: yellow;', 'color: yellow'); 
},
 CustomLog: function(msg, firstcolor, corner1color, middlecolor, cornercolor, lastcolor) {
       console.log('%c{ %c[ %c' +msg +' %c] %c}', 'color: '+firstcolor, 'color: '+corner1color, 'color: '+middlecolor, 'color: '+cornercolor, 'color: '+lastcolor); 
}
}(window.console)
},
randomNumber: function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Credits to CHROME://DINO
},
addXtremePackets: function(packetName) {
  if(packetName == 'JAVASCRIPT') {
           Xtreme.JAVASCRIPT = {
            morePackets: function() {
              console.log('JAVASCRIPT, and more.')
            },
            reUseData: function(argument) {
              // body...
            }
           }
  }
  console.log(packetName+" loaded.")
},
removeRunner: function(){
 Runner = function(){ console.log('removed.') }
},
annoyingJumpingAudio: function(){
  var r = document.createElement('div');
r.innerHTML='<audio controls id="p"><source src="horse.ogg" type="audio/ogg" id="f"><source  id="m" src="https://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3" type="audio/mpeg"></audio>';
document.body.prepend(r);
r.hidden=true;
var l = r.children.p;
document.addEventListener('keydown',function(e) {
   switch(e.keyCode) {
       case 32:
l.play();
break;
}
});
},
/*
addTimeStampTrueOrFalse: function(show_true_or_false) {
  if(show_true_or_false == true) {
var e = 0;
var r = document.createElement('div');
r.innerHTML='<p id="id1">0</p>';
var l = r.children.id1;
function e2() {
   e = e + 1;
setTimeout(function(){e2()}, 1000);
r.innerHTML='<p id="id1">'+e+'</p>';
};
e2();
document.body.insertBefore(r, document.body.firstChild);
r.style.borderRadius='10%';
r.style.background='red';
r.style.color='blue';
r.style.width='50px';
}
if (show_true_or_false == false) {
  document.querySelector("#t > div:nth-child(1)").replaceWith('');
}
}, // took sometime ngl*/
addTimeStamp: function() {
  Xtreme.removeTimeStamp =function() {
    Xtreme.removeTimeStamp = function(){  }
    document.querySelector("#t > div:nth-child(1)").replaceWith('');
}
var e = 0;
var r = document.createElement('div');
r.innerHTML='<p id="id1">0</p>';
var l = r.children.id1;
function e2() {
   e = e + 1;
setTimeout(function(){e2()}, 1000);
r.innerHTML='<p id="id1">'+e+'</p>';
};
e2();
document.body.insertBefore(r, document.body.firstChild);
r.style.borderRadius='10%';
r.style.background='blue';
r.style.color='red';
r.style.width='50px';
},
addTimeStampByColor: function(backgroundColor, fontColor, fontsize, width, height) {
  Xtreme.removeTimeStamp =function() {
    Xtreme.removeTimeStamp = function(){  }
    document.querySelector("#t > div:nth-child(1)").replaceWith('');
}
var e = 0;
var r = document.createElement('div');
r.innerHTML='<p id="id1">0</p>';
var l = r.children.id1;
function e2() {
   e = e + 1;
setTimeout(function(){e2()}, 1000);
r.innerHTML='<p id="id1">'+e+'</p>';
};
e2();
document.body.insertBefore(r, document.body.firstChild);
r.style.borderRadius='10%';
r.style.width = height;
var ewer = width + height;
console.log(ewer + fontsize);
r.style.height = width;
r.style.fontSize=fontsize;
r.style.background=backgroundColor;
r.style.color=fontColor;
r.style.width='50px';
},
/*
removeTimeStampTrueOrFalse: function(show_true_or_false) {
  if(show_true_or_false == true) {
document.querySelector("#t > div:nth-child(1)").remove();
  }
  if(show_true_or_false == false) {
    console.log('Set as false.');
  }
},
*/
veiwXtremeData: function() {
  return Xtreme;
  console.log(Xtreme);
},
 changeJumpheight: function(jump_height) {
    this.config.INIITAL_JUMP_VELOCITY = -jump_height;
    this.config.DROP_VELOCITY = -jump_height / 10
 }
}
Xtreme.XtremeJiLoaded('gmer');
Xtreme.XtremeJiLoaded('loadAssets');
Xtreme.Ji.XtremeLoader('yes');
Xtreme.Ji.addEvents(true);
var MadeHack
Xtreme.Miscs.RunnerInstance = Runner.instance_
var XtremeRunner = {
  name: "Yo ",
  middleName: "Mama ",
  lastName: "XD",
  doConsole: function() {
   console.log(XtremeRunner.name, XtremeRunner.middleName, XtremeRunner.lastName);
  XtremeRunner.doConsole();
 }
 }
/*
choose([
        
      ])
*/
clear();
function l() {
  alert('Succses!');
}
console.log('loadAssets has been found.');
console.log('Ji.XtremeLoader added with yes.');
console.log('Created TRUE');
console.log('Ji addEvenets added.');
setTimeout(function(){console.log('Done!');}, 2000);
clear();
clear();
clear();
clear();
clear();
clear();
// Finished!
/*
                                               
 #    #  #####  #####   ######  #    #  ###### 
  #  #     #    #    #  #       ##  ##  #      
   ##      #    #    #  #####   # ## #  #####  
   ##      #    #####   #       #    #  #      
  #  #     #    #   #   #       #    #  #      
 #    #    #    #    #  ######  #    #  ###### 
                                               
                                               
                                               
                                               
                  HACK
                                    
*/

