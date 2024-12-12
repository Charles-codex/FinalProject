/*Author: Charles Beatty
Wildlife Rescue
11/24/2024*/

//global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger Menu Function
function menu(){
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block"){
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}

//function to display the first answer
function ans1() {
    heading.style.display = "block";
    answer.textContent = "As of right now Forza Horizon four has 2 maps that you can use. the main map that you are on is a version of the U.K. The second map that you can use is called Fortune Island.";
}

//function to display second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "Both maps are a fairly large size that come in the game. The main U.K map is about 72 square kilometers in size. Or 45 miles. Forza hasn't said how big Fortune Island is.";
}

//function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "No. Even though it might seem like it. The maps in the game do not get boring after playing them for a long period of time. There is so much to do such as barn finds, street races, dirt races, and so much more. They make sure you have a lot to do so you don't get bored. Even if you play it for a long period of time you won't get bored.";
}


