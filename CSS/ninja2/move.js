var leftValue = 150;
var topValue = 150;
var walkValue = 1;

document.onkeydown = function (e) {
    if (walkValue == 1) {
        walkValue = 2;
    } else if (walkValue == 2) {
        walkValue = 1;
    }
    if (e.keyCode == 37) {
        verifyCollisionWithOnigiri(leftValue, topValue)
        // Left
        leftValue = leftValue - 20;
        document.getElementById("character").style.left = leftValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/left" + walkValue + ".png')";
    } else if (e.keyCode == 39) {
        verifyCollisionWithOnigiri()
        // Right
        leftValue = leftValue + 20;
        document.getElementById("character").style.left = leftValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/right" + walkValue + ".png')";
    } else if (e.keyCode == 38) {
        verifyCollisionWithOnigiri()
        // Top
        topValue = topValue - 20;
        document.getElementById("character").style.top = topValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/top" + walkValue + ".png')";
    } else if (e.keyCode == 40) {
        verifyCollisionWithOnigiri()
        // Bottom
        topValue = topValue + 20;
        document.getElementById("character").style.top = topValue + "px";
        document.getElementById("character").style.backgroundImage =
            "url('./src/img/down" + walkValue + ".png')";
    }
};