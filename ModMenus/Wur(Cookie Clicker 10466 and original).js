// ==UserScript==
// @name         Wur CookieClicker v10466 Mod Menu 7.2
// @namespace    Wur
// @namespace    Wur Mod Menu 7.2
// @description  Added: Working ESP
// @version      7.2
// @description  Wow you have it!
// @icon         https://storage.pixteller.com/designs/designs-images/2020-09-27/09/wur-1-5f70dfa7a7b1d.png
// @author       Lapide
// @match        http://orteil.dashnet.org/cookieclicker/v10466/*
// @match        https://orteil.dashnet.org/cookieclicker/v10466/*
// @grant        none
// ==/UserScript==
(function() {
    document.addEventListener('keydown', function(e) {
		switch(e.keyCode) {
			case 16&&187:
				Game.Earn(1);
			break;
                case 16&&49:
				Game.Earn(10);
			break;
                case 16&&50:
				Game.Earn(100);
			break;
                case 16&&51:
				Game.Earn(1000);
			break;
		}
});
    /*
function keymanul(keys, action) {
            return Mousetrap.bind(keys, function() {}, action);
        }
function testsubject() {
            _callbacks = {};
            _directMap = {};
            return this;
        }
function el(e, element) {
 
            // if the element has the class "mousetrap" then no need to stop
            if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
                return false;
            }
 
            // stop for input, select, and textarea
            return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
        }
function basic(keys, action) {
            if (_directMap[keys + ':' + action]) {
                _directMap[keys + ':' + action]({}, keys);
            }
            return this;
        }
    */
 
    function yellowlog(message) {
 console.log('%c[ %c( %c' +message +' %c) %c]', 'color: darkred;', 'color: yellow', 'color: black;', 'color: yellow', 'color: darkred;');
} // Warnings
    function redlog(message) {
 console.log('%c[ %c( ' +message +' %c) %c]', 'color: yellow;', 'color: red;', 'color: darkred', 'color: yellow;');
} // For errors
    function log(message) {
 console.log('%c[ %c( %c' +message +' %c) %c]', 'color: blue;', 'color: red;', 'color: lightblue', 'color: red;', 'color: blue;');
} // For activation!
    log('Started!') // Starting message
    function customlog(message, color1, color2, color3, color4, color5) {
 console.log('%c[ %c( %c' +message +' %c) %c]', 'color: '+color1, 'color: '+color2, 'color: '+color3, 'color: '+color4, 'color: '+color5);
 }
function esp() {
document.querySelector("#bigCookie").style.background='red';
document.querySelector("#bigCookie").style.borderRadius='100%';
document.querySelector("#cookieNumbers").remove();
}
    var bestmenuever = document.createElement('div2323');
    bestmenuever.innerHTML=("<button id='linkremover'>Remove All Links</button><button id='credits'>Credits</button><button id='espmake' onclick='esp();'>ESP</button><button id='dankgods'>dank memer</button><button id='removerforcookies'>0 Cookies</button> <button onclick='Game.WriteSave();'>Save</button><button id='breakcookieclicker'>Break Cookieclicker(WARNING DO NOT USE!)</button>");
    var CursorMenu = document.createElement('div');
    CursorMenu.innerHTML=('<p>Cursors</p><button id="CROSSHAIR">Crosshair Cursor</button>');
    var pink = "pink";
    var unity = document
    document.title=("Wur client 4.0");
    var MESAGE = document.createElement('div');
    MESAGE.innerHTML=('<div" id="sectionAd" class="inset"><div class="supportComment">Updates</div><div style="position:relative;"><div class="supportPlaceholder"><div>Wur 4.0 - added all (;</div></div><div style="position:relative;z-index:100;"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px"data-ad-client="ca-pub-8491708950677704"data-ad-slot="8643839697"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div></div</div>');
    var menu4 = document.createElement('div');
    menu4.innerHTML=('<h2 style="color: red;">Bad Hacks(DO NOT USE!)</h2><button onclick="Game.Dissolve(Infinity);">Remove All Cookies</button><button onclick="Game.Entity();">Crash</button><button id="Killclicker">Kill CookieClicker</button>');
    var HackbuttxD = document.createElement('div');
    var Menu2 = document.createElement('div');
    var MENUMENU = document.createElement('div');
    var blue="blue";
    var red = "red";
    var green = "green";
    var orange = "orange";
   MENUMENU.innerHTML=('<p style="color: lightgreen;">NameChanger</p><button id="redname">Red</button><button id="bluename">Blue</button><button id="greenname">Green</button><button id="orangename">Orange</button><button id="normalname">Normal</button>');
    var REMOVEING = document.createElement('div');
    document.querySelector("#topBar").insertBefore(REMOVEING, document.querySelector("#topBar").firstChild);
    REMOVEING.style.float="right";
    REMOVEING.innerHTML=('<button id="RMUI">REMOVE CLIENT</button>');
    var MainMenu = document.createElement('div');
    MainMenu.innerHTML=('<h4>Ultra Hacks</h4><button onclick="Game.Earn(Infinity);">Infinite Cookies</button><button id="GEtcomplex">Get god complex achievement</button>');
    Menu2.innerHTML=('<h2>For Fun!</h2><button id="removethenews">Remove News</button><button onclick="Game.santaLevel=(14);">santa level 14MAX</button><button id="goldencookiespawner">Spawn a golden cookie</button><button onclick="Game.Objects.Prism.amount=100">100 Prisms</button><button id="AJ">Get "Cheated Cookies Taste Awful"</button><button id="removecheatedcookies">Remove CHEATED COOKIES achievement</button><button id="summonraindeer">reindeer</button><button id="AdBlocked">Remove ads</button><button id="OPAUTOCLICKER">Op auto clicker</button><button id="goldenclicker">Op goldencookie never miss</button><button id="OPAUTOSEASON">auto clicks seasons</button>');
    document.querySelector("#topBar").insertBefore(HackbuttxD, document.querySelector("#topBar").firstChild);
    var Removeinject = document.createElement('div');
    Removeinject.innerHTML=('<div id="RemoveHackmenu" class="button">Eject</div>');
    HackbuttxD.innerHTML=('<div id="HackMenuBTU" class="button">Inject</div>');
document.querySelector("#HackMenuBTU").style.background='blue';
document.querySelector("#HackMenuBTU").style.borderRadius='8px';
    // Makes The Menu Happen.
    var TrueMenu= document.createElement('div');
    var menu = document.createElement('div');
    menu.style.width="50px";
    menu.style.float="right";
    menu.innerHTML='<div id="HackButton" class="button">Hack</div>';
    menu.addEventListener('click',function() {
          document.querySelector("#sectionMiddle").style.background="red";
        var menu7 = document.createElement('div');
        menu7.innerHTML=("<button onclick='Game.Earn(100000000000000000000000000100000000000000000000000000100000000000000000000000000100000000000000000000000000100000000000000000000000000100000000000000000000000000)'>Infinite Cookies</button>");
         document.querySelector("#topBar").prepend(menu7);
    });
    // BE WARNED DO NOT ABUSE THIS
    var
        menu9023=document.createElement('menu9023') ,
        menuMod=document.createElement('CUSTOMMENU'); // For a custom made menu!
    console.log('%cDUNK, LAPIDE', 'color: red; font-size: xxx; background-color: lightblue; padding: 100px');
    /*
    // For Custom Menu
    menuMod.innerHTML="";
    menuMod.addEventListener(); <-- PUT THIS AT THE FIRST END!
    //Style
    menuMod.style.
    //Appends
    document.body.FINISHCODE
    //EXAMPLE//
    menuMod.innerHTML="<button id='blank' onclick='blank'>Click Me!</button>";
    menuMod.addEventListener('click',function(){
        customLog('Hi', 'red', 'blue', 'green', 'blue', 'red');
    });
    document.body.insertBefore(menuMod, document.body.firstChild);
    */
     document.querySelector("#RMUI").addEventListener ('click', function() {
         bestmenuever.replaceWith('');
         menu.replaceWith('');
         CursorMenu.replaceWith('');
         MESAGE.replaceWith('');
         HackbuttxD.replaceWith('');
         Removeinject.replaceWith('');
         Menu2.replaceWith('');
         REMOVEING.replaceWith('');
         menu4.replaceWith('');
         MainMenu.replaceWith('');
         MENUMENU.replaceWith('');
         TrueMenu.replaceWith('');
         document.querySelector("#bakeryName").style.color="white";
         alert('Done!');
         Game.Ticker=('Removed!');
                  document.querySelector("#comments > div.separatorBottom > div").remove();
            document.querySelector("#RemoveHackmenu").remove();
            document.querySelector("#HackMenuBTU").remove();
            document.querySelector("#storeTitle > div:nth-child(2)").remove();
document.querySelector("#storeTitle > div:nth-child(1)").remove();
            document.querySelector("#bakeryName").style.color="white";
            alert('BE WARNED YOU WILL STILL HAVE THE "Wur" ACHIEVEMENT, AND IT WILL BE BACK TO COMPLETELY REMOVE IT GO TO GREASY FORK AND DO IT.');
            });
    TrueMenu.innerHTML=('<button onclick="Game.Earn(10000000000000000000000000000);" id="C">Rare Cookies</button><button id="J" onclick="Game.RuinTheFun();">Complete Game</button><button id="F" onclick="Game.Objects.Grandma.amount=(100);">100 Grandmas</button><button id="L" onclick="Game.Objects.Cursor.amount=(1000)">1000 Cursors</button><button onclick="Game.cookiesPs=(100000000000000000);" id="CookiesPERSEC">Alot of cookies ps</button>');
    Removeinject.addEventListener ('click', function() {
        MENUMENU.replaceWith('');
        menu4.replaceWith('');
        TrueMenu.replaceWith('');
                    TrueMenu.replaceWith('');
        Removeinject.replaceWith(HackbuttxD);
        document.querySelector("#HackMenuBTU").style.background='blue';
document.querySelector("#HackMenuBTU").style.borderRadius='8px';
                                                      });
    // If you remove this your "hack" would be gone.
    HackbuttxD.addEventListener ('click', function() {
        document.querySelector("#storeTitle").insertBefore(bestmenuever, document.querySelector("#storeTitle").firstChild);
        document.querySelector("#comments").insertBefore(menu, document.querySelector("#comments").firstChild);
         document.querySelector("#comments").insertBefore(MENUMENU, document.querySelector("#comments").firstChild);
                        document.querySelector("#versionNumber").insertBefore(MainMenu, document.querySelector("#versionNumber").firstChild);
        document.querySelector("#versionNumber").insertBefore(CursorMenu, document.querySelector("#versionNumber").firstChild);
       /* document.querySelector("#storeTitle").insertBefore(MESAGE, document.querySelector("#storeTitle").firstChild);*/
        Game.Popup('Injected');
document.querySelector("#storeTitle").insertBefore(Menu2, document.querySelector("#storeTitle").firstChild);
        document.querySelector("#storeTitle").insertBefore(menu4, document.querySelector("#storeTitle").firstChild);
        Game.Ticker=('Injected!');
           HackbuttxD.replaceWith(Removeinject);
document.querySelector("#RemoveHackmenu").style.borderRadius='8px';
document.querySelector("#RemoveHackmenu").style.background='red';
       document.querySelector("#comments > div.separatorBottom").insertBefore(TrueMenu, document.querySelector("#comments > div.separatorBottom").firstChild);
        document.querySelector("#CookiesPERSEC").addEventListener ('click', function() {
           Game.Ticker=('activated COOKIES PS!');
        });
        /*
        document.querySelector("#goldenclicker").addEventListener ('click', function() {
           var ENDPOOOO = document.createElement('div');
            ENDPOOOO.innerHTML="<button>End GoldClicker</button>";
               var GOLDYclicker = setInterval(Game.goldenCookie.click, 1);
            var seasoner = document.querySelector("#goldenclicker");
                seasoner.replaceWith(ENDPOOOO);
            ENDPOOOO.addEventListener('click', function() {
                clearInterval(GOLDYclicker);
                ENDPOOOO.replaceWith(seasoner);
            });
        });
        */
        var btutest = document.querySelector("#OPAUTOCLICKER");
        var endopnes = document.createElement('div');
        endopnes.innerHTML="<button>End AutoClicker</button>";
        document.querySelector("#OPAUTOCLICKER").addEventListener ('click', function() {
               var autoclicks = setInterval(Game.ClickCookie, 1);
            document.querySelector("#OPAUTOCLICKER").replaceWith(endopnes);
            endopnes.addEventListener ('click', function() {
                endopnes.replaceWith(btutest);
                            var Endautoclicker = clearInterval(autoclicks);
            });
            document.querySelector("#removerforcookies").addEventListener ('click', function() {
                Game.cookies=0
                log('Removed!');
            });
            document.querySelector("#dankgods").addEventListener ('click', function() {
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('DANK');
                alert('im done');
            });
    });
        document.querySelector("#OPAUTOSEASON").addEventListener ('click', function() {
              var ENDPOOOO = document.createElement('div');
            ENDPOOOO.innerHTML="<button>End seasonclicker</button>"
               var GOLDYclicker = setInterval(Game.seasonPopup.click, 1);
            var seasoner = document.querySelector("#OPAUTOSEASON")
                seasoner.replaceWith(ENDPOOOO);
            ENDPOOOO.addEventListener('click', function() {
                clearInterval(GOLDYclicker);
                ENDPOOOO.replaceWith(seasoner);
    });
        });
        document.querySelector("#linkremover").addEventListener ('click', function() {
           document.querySelector("#topBar > div:nth-child(3)").remove();
        });
        document.querySelector("#Killclicker").addEventListener ('click', function() {
            location.href='Killed!';
            location.search=('Killed!');
            });
        document.querySelector("#goldenclicker").addEventListener ('click', function() {
            var ENDPOOOO = document.createElement('div');
            ENDPOOOO.innerHTML="<button>End GoldClicker</button>"
               var GOLDYclicker = setInterval(Game.goldenCookie.click, 1);
            var seasoner = document.querySelector("#goldenclicker")
                seasoner.replaceWith(ENDPOOOO);
            ENDPOOOO.addEventListener('click', function() {
                clearInterval(GOLDYclicker);
                ENDPOOOO.replaceWith(seasoner);
            });
    });
          document.querySelector("#GEtcomplex").addEventListener ('click', function() {
              Game.Win("God complex");
Game.Ticker="God Complex!";
    });
        document.querySelector("#credits").addEventListener ('click', function() {
               Game.Notify('Wur', 'Welcome To WUR! A Hacked Client by lapide, and dunk for the esp.', [2]);
 
    });
         document.querySelector("#removethenews").addEventListener ('click', function() {
              document.querySelector("#commentsText").remove();
    });
        document.querySelector("#CROSSHAIR").addEventListener ('click', function() {
                  document.body.style.cursor="crosshair";
            });
         document.querySelector("#espmake").addEventListener ('click', function() {
                document.querySelector("#bigCookie").style.background='red';
document.querySelector("#bigCookie").style.borderRadius='100%';
document.querySelector("#cookieNumbers").remove();
 
    });
        document.querySelector("#AdBlocked").addEventListener ('click', function() {
                Game.Ticker=('Ad Blocked By ad Blocker');
    document.querySelector("#support").replaceWith('');
    });
                document.querySelector("#orangename").addEventListener ('click', function() {
                  document.querySelector("#bakeryName").style.color=('orange');
            });
        document.querySelector("#breakcookieclicker").addEventListener ('click', function() {
                Game.cookies=Infinity
            Game.Objects.Cursor.amount=Infinity
 
    });
        document.querySelector("#greenname").addEventListener ('click', function() {
                  document.querySelector("#bakeryName").style.color=('green');
            });
        document.querySelector("#bluename").addEventListener ('click', function() {
                  document.querySelector("#bakeryName").style.color=('blue');
            });
         document.querySelector("#normalname").addEventListener ('click', function() {
                  document.querySelector("#bakeryName").style.color=('');
            });
        document.querySelector("#redname").addEventListener ('click', function() {
                  document.querySelector("#bakeryName").style.color=('red');
    });
         Removeinject.addEventListener ('click', function() {
                    Game.Ticker=('Removed!');
                                                      });
           document.querySelector("#summonraindeer").addEventListener ('click', function() {
       Game.Upgrades['Reindeer season'].toggle()
         Game.Ticker="Reiiinnnnndddeeeeerrrrrrsssss!"
    });
                        document.querySelector("#removecheatedcookies").addEventListener ('click', function() {
       Game.Achievements['Cheated cookies taste awful'].won=0
    });
            Game.Achievement('Wur','Wur Client Download',[0,9], 0);
Game.Win('Wur');
        document.querySelector("#C").addEventListener ('click', function() {
                Game.Ticker=('+1m!');
            });
            document.querySelector("#F").addEventListener ('click', function() {
                Game.Ticker=('100+ gradmas!');
            });
    document.querySelector("#L").addEventListener ('click', function() {
        Game.Ticker=('1000+ Cursors!');
            });
    document.querySelector("#AJ").addEventListener ('click', function() {
                Game.Ticker=('All in one button, but in a long script!');
        Game.Win('Cheated cookies taste awful');
 
    });
           document.querySelector("#J").addEventListener ('click', function() {
                  Game.Ticker=('DO NOT EXPLOIT THEM GRANDMAS');
            });
           document.querySelector("#goldencookiespawner").addEventListener ('click', function() {
       Game.goldenCookie.life=0;
     Game.goldenCookie.spawn();
    });
    });
})(0);
    // NEW!
/*AUTO CLICKERS:
   document.querySelector("#commentsText").remove(); <-- NOT AUTO CLICKER
   var SEASONclicker = setInterval(Game.goldenCookie.click, 1); //Auto click golden cookie
   var GOLDYclicker = setInterval(Game.seasonPopup.click, 1);  // btw im using this for notes
*/
/*CHANGE LOG:
   Dev Menu
   Dev Code
   Kill CookieClicker
   COMING:
   Dev Tools
   bestmenuever
   #linkremover
   #breakcookieclicker
   #removerforcookies
   #dankgods
   #espmake
   espmake
   document.querySelector("#storeTitle > div:nth-child(1) > button:nth-child(2)").style.background='red';
document.querySelector("#storeTitle > div:nth-child(1) > button:nth-child(3)").style.background='red';
document.querySelector("#Killclicker").style.background='red';
    document.querySelector("#storeTitle > div:nth-child(1) > button:nth-child(2)").style.borderRadius='8px';
document.querySelector("#storeTitle > div:nth-child(1) > button:nth-child(3)").style.borderRadius='8px';
document.querySelector("#Killclicker").style.borderRadius='8px';
document.querySelector("#RemoveHackmenu").style.borderRadius='8px';
document.querySelector("#RemoveHackmenu").style.background='red';
document.querySelector("#HackMenuBTU").style.background='blue';
document.querySelector("#HackMenuBTU").style.borderRadius='8px';
*/
 
/*
  Game.Notify('Wur', 'Welcome To WUR! A Hacked Client by lapide, and dunk for the esp.', [2]);
 
*/
"UPDATE NAME COLORS!";
