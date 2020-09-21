var r = document.createElement('div');
var ALERTS = {
freshAlert: function(title, msg){
  function p() {
   r.style.transition = '2s';
     r.style.opacity='1';
   setTimeout(function(){r.remove(); r.style.opacity='1000'}, 1000);
}
r.innerHTML='<div style="-webkit-font-smoothing: antialiased;color: #555;font-size: 1em;line-height: 1.5;cursor: auto;box-sizing: inherit;display: flex;position: fixed;z-index: 1060;top: 0;right: 0;bottom: 0;left: 0;flex-direction: row;justify-content: center;padding: .625em;overflow-x: hidden;transition: background-color .1s;-webkit-tap-highlight-color: transparent;transition:2s;background: rgba(0,0,0,.4);align-items: center;overflow-y: auto;"><div style="height: 200px; border-radius: 8px; width: 500px; background: white; color: lightgrey; transistion: font-weight: bolder;"><h1><center>'+title+'</center></h1><h1></h1><h1></h1><center><h2>'+msg+'</h2></center><button style="weight:50px; height: 50px;position: absolute;left: 658px;background: grey; float: left;" onclick="ALERTS.p();">OK</button></div></div>';
document.body.background='red';
document.body.prepend(r);
 },
 p: function p() {
   r.style.transition = '2s';
r.style.opacity='0'
   setTimeout(function(){r.remove()}, 900);
   setTimeout(function(){r.style.opacity=('1')}, 1000);
}
}
