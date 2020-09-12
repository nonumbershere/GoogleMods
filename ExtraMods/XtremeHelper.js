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
