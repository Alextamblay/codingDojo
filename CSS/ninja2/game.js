import showModal from "./gameover.js";
import verifyCollisionWithOnigiri from "./verifyCollision.js";

const timeEl = document.getElementById("timer");
let time = 60;

let leftValue = 150;
let topValue = 150;
let walkValue = 1;

const onigiriPos = {};
let onigiriCount = 0;

let score = 0;

export default function generateOnigiri() {
    const posTop = randomPos(0, 800);
    const posLeft = randomPos(0, 800);
    const onigiri = document.createElement("img");
    
    //Estilos al onigiri
    onigiri.style.position = "absolute";
    onigiri.style.backgroundImage = "url('./src/img/onigiri.png')";
    onigiri.style.height = "32px";
    onigiri.style.width = "32px";
    onigiri.style.top = posTop;
    onigiri.style.left = posLeft;
    onigiri.classList = "onigiri";
    onigiri.setAttribute("id", `onigiri${++onigiriCount}`);
    
    //Agregando la posicion del onigiri a el objeto global onigiriPos
    onigiriPos[0] = {posTop, posLeft, onigiriCount};
    
    //Agrego el onigiri al HTML
    document.getElementById("background").appendChild(onigiri);
}

generateOnigiri()


document.onkeydown = function (e) {
    const posCollision = verifyCollisionWithOnigiri(topValue, leftValue, onigiriPos[0].posTop, onigiriPos[0].posLeft)
    if (walkValue == 1) {
        walkValue = 2;
    } else if (walkValue == 2) {
        walkValue = 1;
    }
    if (e.keyCode == 37) {
        if(posCollision < 60){
            document.getElementById(`onigiri${onigiriCount}`).remove()
            generateOnigiri()
            score++
        }
        // Left
        leftValue = leftValue - 20;
        document.getElementById("character").style.left = leftValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/left" + walkValue + ".png')";
    } else if (e.keyCode == 39) {
       if(posCollision < 70){
            document.getElementById(`onigiri${onigiriCount}`).remove()
            generateOnigiri()
            score++
        }
        // Right
        leftValue = leftValue + 20;
        document.getElementById("character").style.left = leftValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/right" + walkValue + ".png')";
    } else if (e.keyCode == 38) {
        if(posCollision < 35){
            document.getElementById(`onigiri${onigiriCount}`).remove()
            generateOnigiri()
            score++
        }
        // Top
        topValue = topValue - 20;
        document.getElementById("character").style.top = topValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/top" + walkValue + ".png')";
    } else if (e.keyCode == 40) {
       if(posCollision < 80){
          document.getElementById(`onigiri${onigiriCount}`).remove()
            generateOnigiri() 
            score++ 
        }
        // Bottom
        topValue = topValue + 20;
        document.getElementById("character").style.top = topValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/down" + walkValue + ".png')";
    }
};


const idInter = setInterval(() => {
    timeEl.textContent = time;
    time--;
    if (time === -1) {
        showModal(score);
        clearInterval(idInter)
    }
    
}, 1000);


function randomPos(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
