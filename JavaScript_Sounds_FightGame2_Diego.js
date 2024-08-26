//My variables
let damage = 8;
let enemy1health = 100;
//Player variables
let cash = 0;
let player1health = 100;
let enemyDamage = 80;
//Health and money function
        setInterval(function()
        {
            document.getElementById("cash").innerHTML = cash;
            let healthvariable = document.getElementById("health")
            healthvariable.value = enemy1health;

            if (enemy1health <= 1)
                {
                    enemy1health = 100;
                    let amountgiven = Math.floor(Math.random() * 200 + 1);
                    cash += amountgiven;
                    player1health ++;
                    mySound = new sound("SUI_sound.mp3");
                    mySound.play();
                }
        }, 1);

//Player health function
setInterval(function()
        {
            document.getElementById("cash").innerHTML = cash;
            let playerhealthvariable = document.getElementById("playerHealth")
            playerhealthvariable.value = player1health;

            if (player1health <= 1)
                {
                    player1health = 2;
                    let amountgiven = Math.floor(Math.random() * 100 + 1);
                    cash -= amountgiven;
                    alert("YOU LOSE!")
                }
        }, 1);

//Timer set
const timeH = document.querySelector('h1');
let timeSecond = 18;

function endTime()
{
    timeH.innerHTML = 'INCOMING ATTACK!'
    player1health -= enemyDamage;
    timeSecond = 18;
}

var isPlaying = false;
//Inconming enemy damage
function startMatch()
{
    displayTime(timeSecond)
    timer2();

const countdown = setInterval (()=>{
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1){
        endTime();
        clearInterval(countdown);
        isPlaying = true
        isPlayingg = false
        timeSecond = 18
        mySound = new sound("punch-2.mp3");
                    mySound.play();
    }
    else if (!isPlaying)
    {
        isPlaying = true
    }
},1000)

function displayTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timeH.innerHTML= `${min<10 ? '0': ''}${min}:${sec<10?'0':''}${sec}`
}

//New: Play background music


if  (!isPlaying)
{
    mySound = new sound("muffled-party-music-183774.mp3");
    mySound.play();
    isPlaying = true
}

// prevent the start button from being clicked
document.getElementById("startMatchbutton").disabled = true;
// allow the stop button to be clicked
document.getElementById("stopSound").disabled = false;


}
//Restart the match
function restartMatch()
{
    window.location.reload(); //stop playing music by reloading the page
    player1health = 90
    enemy1health = 100
    timeSecond = 15
    enemyDamage = 80
    startMatch();
}


//New: Added Sound Code


function Suii()
{
    var mySound = new sound("muffled-party-music-183774.mp3")
    mySound.play();
}

// build the constructor to create a sound object
function sound(src)
{
// create a new audio element
    this.sound = document.createElement("audio");
//set the source of the audio element
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}

var isPlayingg = false;
// Damage Enemy
function attackEnemy()
        {
            enemy1health -= damage; 
            enemyDamage = 80;

            if  (!isPlayingg)
                {
                    mySound = new sound("punch-95294.mp3");
                    mySound.play();
                    isPlayingg = true
                }
        }

        //Block Incoming damage
function blockEnemy()
        {
            enemyDamage = 0;
            // allow the start button to be clicked
            document.getElementById("startMatchbutton").disabled = false;
            // prevent the stop button from being clicked
            document.getElementById("stopSound").disabled = true;
            reset();

        }

// NEW Move Image:

//this will reset the images and place them on their original positions
function reset()
{
    clearTimeout(my_time);
    document.getElementById('i1').style.left="90px";
    document.getElementById('i1').style.top="585px";
    document.getElementById('msg').innerHTML="";
    document.getElementById('i2').style.left="1200px";
    document.getElementById('i2').style.top="585px";
}

//this will move the images 
function disp()
{
    var step=1;
    var y=document.getElementById('i1').offsetTop;
    var x=document.getElementById('i1').offsetLeft;
    document.getElementById('msg').innerHTML="X: "+x +" Y: "+y;

    //this will limit the up and down movement
    if(y<600)
    {
        y=y+step;
        document.getElementById('i1').style.top=y+"px";
    }
    // this limits the side movement
    else
    {
        if (x<1000)
        {
            x=x+step;
            document.getElementById('i1').style.left=x+"px";
        }

    }
}
// this is the same function as disp() but with a different image id
function disp2()
{
    var step=-1;
    var y=document.getElementById('i2').offsetTop;
    var x=document.getElementById('i2').offsetLeft;
    document.getElementById('msg').innerHTML="X: "+x +" Y: "+y;
    if(y>599)
    {
        y=y+step;
        document.getElementById('i2').style.top=y+"px";
    }
    else
    {
        if (x>300)
        {
            x=x+step;
            document.getElementById('i2').style.left=x+"px";
        }

    }
}

//start the function ticking every 10 millisecons
function timer2()
{
    disp();
    disp2();
    my_time=setTimeout('timer2()',10);

}




