const onigiriPos = {};
let onigiriCounter = 0;

export default function generateOnigiris() {
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

    //Agregando la posicion del onigiri a el objeto global onigiriPos
    onigiriPos[onigiriCounter] = {posTop, posLeft};

    //Agrego el onigiri al HTML
    document.getElementById("background").appendChild(onigiri);

    //Le sumo uno al contador de onigiris
    onigiriCounter++
}

function randomPos(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
