/*
Suyeon Park 
CST-120
Hughes: Bill
12/18/2022
This is my own work except the help from 
Part of in class example used as reference(Hughes:Bill)
*/

//Call the initialize function on the page load
window.onload = loading;

//Function that will execute upon load
function loading() {
    console.log("It is loading...");
}

// question popup
function questionBox() {
    var userName = prompt("What is your name?", "Please enter your name here");
    let text = document.getElementById("whoRU");
    text.innerHTML = '<p style="margin-left: 50px; font-size: 20px;">Hello ' + userName + "! " + "<br>Hope you have a great day:)</p>";
}

// dropdown response
function favFam() {
    let response = document.getElementById("wowReally");
    response.innerHTML = "Wow... really? 🫣"
}

// Contact buttons -----------------------------------------------

function sorryMsg() {
    alert("Sorry, this is too personal, please DM me instead 😜");
}


// heart toggle for the future page
$(function () {
    $(".dblclickImg1").dblclick(function () {
        $("#heart").fadeToggle(500);
        console.log("hello");
    });
});

$(function () {
    $(".dblclickImg2").dblclick(function () {
        $("#heart2").fadeToggle(500);
    });
});

$(function () {
    $(".dblclickImg3").dblclick(function () {
        $("#heart3").fadeToggle(500);
    });
});
