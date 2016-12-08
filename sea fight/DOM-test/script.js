function init() {
    var planet = document.getElementById("greenplanet");

    planet.innerHTML = "Red Alert: hit by phaser fire!";
    //planet.className = "redtext";
    planet.setAttribute("class", "lg-size redtext");
    var altText = planet.getAttribute("alt")
    console.log(altText);
}
window.onload = init;