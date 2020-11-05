var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var enterbutton = document.getElementById('enterid');
var music = new Audio('assets/music.mp3');
music.volume = 0.1;
music.currentTime = 1.5;
music.loop = true;
var hoversnd = new Audio('assets/hover.ogg');


enterbutton.onclick = function(){
    console.log('start');
    enterbutton.style.display = "none";
    music.play();
}


c.fillStyle = "lightpink";
c.fillRect(0,0,canvas.width/2,canvas.height);

c.fillStyle = "lightblue";
c.fillRect(canvas.width/2,0,canvas.width/2,canvas.height);

var girloutline = new Image();
girloutline.src = "assets/girloutline.png";
girloutline.onload = function(){c.drawImage(girloutline,canvas.width/7.1,30,canvas.width/4.5,canvas.height/1.2)};

var boyoutline = new Image();
boyoutline.src = "assets/boyoutline.png";
boyoutline.onload = function(){c.drawImage(boyoutline,canvas.width/1.54,30,canvas.width/5,canvas.height/1.2)};

var girlbutton = document.getElementById('selectgirl');
var boybutton = document.getElementById('selectboy');

girlbutton.onmouseover = function(){
    hoversnd.play();
}
boybutton.onmouseover = function(){
    hoversnd.play();
}

girlbutton.onclick = function(){
    console.log("girl selected.");
    girlbutton.style.display = "none";
    boybutton.style.display= "none";
    document.getElementById("gendergirl").style.display = "none";
    document.getElementById("genderboy").style.display = "none";
    document.getElementById("reloadbutton").style.display = "initial";

    var girlexplain = new Image();
    girlexplain.src = "assets/girlexplain.png";
    girlexplain.onload = function(){c.drawImage(girlexplain,canvas.width/1.9,canvas.height/20,canvas.width/2.5,canvas.height/1.1)};

    c.fillStyle = "lightpink";
    c.fillRect(0,0,canvas.width,canvas.height);

    var girl = new Image();
    girl.src = "assets/girl.png";
    girl.onload = function(){c.drawImage(girl,canvas.width/8,canvas.height/50,canvas.width/4,canvas.height/1.05)};

    var girlhitbox = document.getElementsByClassName('touchgirl');
    for (var i=0; i<girlhitbox.length;i++){
    girlhitbox[i].style.display='initial';
    }
}

boybutton.onclick = function(){
    console.log("boy selected.");
    girlbutton.style.display = "none";
    boybutton.style.display= "none";
    document.getElementById("gendergirl").style.display = "none";
    document.getElementById("genderboy").style.display = "none";
    document.getElementById("reloadbutton").style.display = "initial";

    var boyexplain = new Image();
    boyexplain.src = "assets/boyexplain.png";
    boyexplain.onload = function(){c.drawImage(boyexplain,canvas.width/1.9,canvas.height/20,canvas.width/2.5,canvas.height/1.1)};

    c.fillStyle = "lightblue";
    c.fillRect(0,0,canvas.width,canvas.height);

    var boy = new Image();
    boy.src = "assets/boy.png";
    boy.onload = function(){c.drawImage(boy,canvas.width/8,canvas.height/50,canvas.width/4,canvas.height/1.05)};

    var boyhitbox = document.getElementsByClassName('touchboy');
    for (var i=0; i<boyhitbox.length;i++){
    boyhitbox[i].style.display='initial';
    }

}

var oksnd = new Audio('assets/green.wav');
var hmmsnd = new Audio('assets/orange.wav');
var nosnd = new Audio('assets/red.wav');

function green(){
    oksnd.play();
    var allStat = document.getElementsByClassName('reaction'); //to hide all active reactions
    for (var i=0; i<allStat.length;i++){
    allStat[i].style.display='none';
    }

    console.log("green!");
    var greenStat = document.getElementById("green");
    greenStat.style.display="initial";
    setTimeout(function(){
        greenStat.style.display="none";
    }, 3000);
}


function orange(){
    hmmsnd.play();
    var allStat = document.getElementsByClassName('reaction'); //to hide all active reactions
    for (var i=0; i<allStat.length;i++){
    allStat[i].style.display='none';
    }
    console.log("orange!");
    var orangeStat = document.getElementById("orange");
    orangeStat.style.display="initial";
    setTimeout(function(){
        orangeStat.style.display="none";
    }, 3000);
}

function red(){
    nosnd.play();
    var allStat = document.getElementsByClassName('reaction'); //to hide all active reactions
    for (var i=0; i<allStat.length;i++){
    allStat[i].style.display='none';
    }
    console.log("red!");
    var redStat = document.getElementById("red");
    redStat.style.display="initial";
    setTimeout(function(){
        redStat.style.display="none";
    }, 3000);
}

function reload(){
    location.reload()
}
