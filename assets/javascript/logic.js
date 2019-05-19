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

function addElement() {
    score += fire;
    score += wind;
    score += leaf;
    score += water;
}



$("#fire").click(function() {
    
})
$("#water").click(function() {
})
$("#wind").click(function() {
})
$("#leaf").click(function() {
})

startGame();