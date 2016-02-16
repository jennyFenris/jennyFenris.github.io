var artoriasDesc = document.getElementById("para-1");
artoriasDesc.innerHTML = "One of Gwyn's Four Knights, Sir Artorias is a holy warrior with an unbendable will of steel and unmatched skill with a greatsword. His personal symbol is a wolf, as depicted in his ring, and he later gains a wolf companion named Sif. He makes his formal appearance in the Additional Content.";

var ornsteinDesc = document.getElementById("para-2");
ornsteinDesc.innerHTML = "Ornstein is the captain of the Four Knights of Gwyn, and presumably, the leader of Gwyn's knights. To slay the dragons, he wields lightning power and imbues his Dragonslayer Spear with it. Despite his large size he is extremely agile, using his spear and projectiles to reach great distances with his offensive onslaught.";

var sifDesc = document.getElementById("para-3");
sifDesc.innerHTML = "Great Grey Wolf Sif is the wolf companion of Sir Artorias, the Abysswalker. After Artorias passed away, Sif became the guardian of Artorias' grave in the Darkroot Garden. Sif wields Artorias Greatsword and uses some of his moves in combat.";

var topPara = document.getElementById("para-4");
topPara.innerHTML = "When he uses his Somersault slam attack you will want to roll to the right as the camera tilts upward while locked onto him. You want to do this three times and then get in 1 or 2 attacks (based on your weapon) after the third attack lands. Avoid attacking after his Steadfast Leap. Instead use that opportunity to heal or get some distance from him.";

var middlePara = document.getElementById("para-5");
middlePara.innerHTML = "When he uses his Overhand Smash, roll to the right. While he leaves himself open for a frames, he will usually follow up with his Spinning Slash attack. Therefore it is best to get some distance from him instead as the Spinning Slash attack is difficult to get away from when it begins.";

var bottomPara = document.getElementById("para-6");
bottomPara.innerHTML = "With his Charging Slash move you will always want to roll backwards from where he intends to land the attack. After successfully dodging this attack, you will be able to get 1 or 2 hits on him. His Heavy Thrust attack will need to be side dodged. Depending on which way he turns during the charge, you will need to dodge the opposite way. After you dodge he has a long recovery time and you should be able to get 2 or 3 hits in.";

var importantContent = document.getElementById("impCont")
importantContent.innerHTML = "Equip armour with decent poise (50+ is good), a mid shield with 100% physical and a decent weapon (sweeping swords such as the Black Knight Sword are good as he moves around quite a bit and can be hard to hit with a thrusting weapon). Most importantly, patience, patience is key! Keep your shield up when he is standing near you, only lowering it to recharge Stamina.";

var notImportantContent = document.getElementById("nImpCont-1")
notImportantContent.innerHTML = "Thrusting weapons like the Silver Knight Spear are perfect for this fight, especially for Dex builds. If you attack at the appropriate times he generally won't dodge. Keep your equip load below 50%. Warning the boss appears to have very high thrust defense.";

var notImportantContent02 = document.getElementById("nImpCont-2")
notImportantContent02.innerHTML = "The Greatshields have high stability and will block most of his attacks with a minimum loss of stamina. You will still need to dodge his high leaping attack. Block his attacks and pick your spots to strike afterwards. A spear or halberd is a good choice due to their range and quick poking movement. Before you strike be sure the attack won't deplete so much stamina that you'd be unable block the next hit if Artorias attacks again quickly.";

 function startLightBox(){
            var lbBg = document.getElementById("lightBoxBg");
            var lb = document.getElementById("lightBox");

            lbBg.style.display = "block";
            lb.style.display = "block";
        }

        function dismiss(){
            var lbBg = document.getElementById("lightBoxBg");
            var lb = document.getElementById("lightBox");
            lbBg.style.display = "none";
            lb.style.display = " none";
        }

(function() {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();
 
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.2;
 
canvas.width = width;
canvas.height = height;
 
function update(){
  // check keys
    if (keys[38] || keys[32]) {
        // up arrow or space
      if(!player.jumping){
       player.jumping = true;
       player.velY = -player.speed*2;
      }
    }
    if (keys[39]) {
        // right arrow
        if (player.velX < player.speed) {             
            player.velX++;         
         }     
    }     
    if (keys[37]) {         
        // left arrow         
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }
 
    player.velX *= friction;
 
    player.velY += gravity;
 
    player.x += player.velX;
    player.y += player.velY;
 
    if (player.x >= width-player.width) {
        player.x = width-player.width;
    } else if (player.x <= 0) {         
        player.x = 0;     
    }    
  
    if(player.y >= height-player.height){
        player.y = height - player.height;
        player.jumping = false;
    }
 
  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);
 
  requestAnimationFrame(update);
}
 
document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
 
window.addEventListener("load",function(){
    update();
});
 



