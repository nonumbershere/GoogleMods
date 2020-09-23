// Made by lapide with an example!
var r = document.createElement('div');
function godmode() {
var e = document.createElement('button');
	e.innerText='Godmode';
  var l = document.getElementById('goddec');
l.innerText="Disable Godmode";
  l.addEventListener('click', function(){
        l.innerText="Disable Godmode";
      
Runner.instance_.gameOver=Runner.prototype.gameOver;
l.replaceWith(e);
  });
    e.addEventListener('click', function(){
       e.innerText='Godmode';
 Runner.instance_.gameOver=function(){}
 
        e.replaceWith(l);
    });
}
function skinMaker() {
var e = document.createElement('button');
	e.innerText='Disable ESP';
  var l = document.getElementById('esp');
l.innerText="ESP";
  l.addEventListener('click', function(){
        l.innerText="ESP";
      
document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true";
document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true";
l.replaceWith(e);
//https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/e.png?raw=true
  });// https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true
    e.addEventListener('click', function(){
       e.innerText='Disable ESP';
 document.querySelector("#offline-resources-2x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/e.png?raw=true";
 document.querySelector("#offline-resources-1x").src="https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/e.png?raw=true";
        e.replaceWith(l);
    });
}
function unstop() {
    this.setPlayStatus(true);
    this.paused = false;
}
function Close() {
	r.replaceWith('')
}
function hide() {
	var hider = document.createElement('button');
	r.replaceWith(hider);
	hider.innerText="Open";
    hider.addEventListener('click', function(){
         hider.replaceWith(r);
    });
}
r.id="modmenu";
r.innerHTML='<style>.btu1 {color: white; background: black}</style><button class="btu1" id="goddec" onclick="godmode();">Godmode</button><button class="btu1" onclick="Runner.instance_.stop();">Pause Dino</button><button class="btu1" onclick="++Runner.instance_.currentSpeed">+Speed</button><button class="btu1" onclick="--Runner.instance_.currentSpeed">-Speed</button><button class="btu1" onclick="unstop();">Unpause Dino</button><button onclick="window.close();">Close ChromeDine</button><button onclick="--Runner.instance_.tRex.config.GRAVITY">-Gravity</button><button onclick="hide();">Hide</button><button onclick="++Runner.instance_.tRex.config.GRAVITY">+Gravity</button><button id="esp" onclick="skinMaker()">ESP</button><button onclick="Close()">Close</button><button onclick="++Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY">-Jump height</button><button onclick="--Runner.instance_.tRex.config.INIITAL_JUMP_VELOCITY">+Jump height</button><p style="color: red;">Made by lapide</p><button onclick="Runner.instance_.horizon.addCloud();">Add cloud</button><button onclick="Runner.instance_.horizon.removeFirstObstacle();">Remove first OBS</button><button onclick="++Runner.instance_.horizon.cloudSpeed">+Cloud speed</button><button onclick="--Runner.instance_.horizon.cloudSpeed">-Cloud speed</button><button onclick="Runner.instance_.config.MAX_CLOUDS=0">Remove clouds</button><button onclick="--Runner.instance_.config.MAX_CLOUDS">Remove 1 cloud</button><button onclick="++Runner.instance_.config.MAX_CLOUDS">Add 1 cloud</button><button onclick=Runner.instance_.horizon.obstacles=[]"">Remove nearby clouds</button><button onclick="Runner.instance_.horizon.spritePos.CACTUS_LARGE=(0);Runner.instance_.horizon.spritePos.CACTUS_SMALL=(0);Runner.instance_.horizon.spritePos.PTERODACTYL=(0);Runner.instance_.horizon.spritePos.TEXT_SPRITE=(0);Runner.instance_.horizon.spritePos.CLOUD=0;Runner.instance_.gameOver=function(){}">Sandbox Mode</button><button onclick="Runner.instance_.horizon.spritePos.CACTUS_LARGE=(0);Runner.instance_.horizon.spritePos.CACTUS_SMALL=(0);Runner.instance_.horizon.spritePos.PTERODACTYL=(0);Runner.instance_.gameOver=function(){}">Remove all OBS</button><button onclick="Runner.instance_.horizon.spritePos.CACTUS_LARGE=(0);Runner.instance_.horizon.spritePos.CACTUS_SMALL=(0);Runner.instance_.horizon.spritePos.PTERODACTYL=(0);">Inv OBS</button><button onclick="setInterval(function(){Runner.instance_.horizon.addCloud()}, 1);">cloudmaker</button>';
document.body.prepend(r);
document.querySelector("#modmenu").style.background='black';
document.querySelector("#modmenu").style.height='120px';
document.querySelector("#modmenu").style.borderRadius='10px';
document.querySelector("#modmenu").style.position='absolute';
document.querySelector("#modmenu").style.top='500px';
// https://github.com/nonumbershere/Hacks-and-mods/blob/master/Apk%20mod%20menu/hitbox.png?raw=true
