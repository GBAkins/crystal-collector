//Variables
var fire = 0;
var wind = 0;
var leaf = 0;
var water = 0;
var target = 0;
var total = 0;
var wins = 0;
var losses = 0;

//Functions
function startGame() {
    total = 0;
    target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    fire = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    wind = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    leaf = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    water = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#target").html(target);
    $("#total").html(total);
}

function addFire() {
    total = total + fire;
    $("#total").html(total);
    console.log(total);
    if (total > target) {
        losses++;
        $("#lossCounter").html(losses);
        startGame();
    }
    else if (total == target) {
        wins++;
        $("#winCounter").html(wins);
        startGame();
    }
}

function addWind() {
    total += wind;
    $("#total").html(total);
    console.log(total);
    if (total > target) {
        losses++;
        $("#lossCounter").html(losses);
        startGame();
    }
    else if (total == target) {
        wins++;
        $("#winCounter").html(wins);
        startGame();
    }
}

function addLeaf() {
    total += leaf;
    $("#total").html(total);
    console.log(total);
    if (total > target) {
        losses++;
        $("#lossCounter").html(losses);
        startGame();
    }
    else if (total == target) {
        wins++;
        $("#winCounter").html(wins);
        startGame();
    }
}

function addWater() {
    total += water;
    $("#total").html(total);
    console.log(total);
    if (total > target) {
        losses++;
        $("#lossCounter").html(losses);
        startGame();
    }
    else if (total == target) {
        wins++;
        $("#winCounter").html(wins);
        startGame();
    }
}

$("#fire").click(function() {
    addFire();
})
$("#water").click(function() {
    addWater();
})
$("#wind").click(function() {
    addWind();
})
$("#leaf").click(function() {
    addLeaf();
})

startGame();