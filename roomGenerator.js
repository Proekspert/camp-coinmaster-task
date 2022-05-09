var bed;
var someField;
var lockedRoom;
var forGuests;
var sunnySpot;

window.onload = function () {

    document.getElementById("coinmasterPremises").innerHTML =
        thePerfectRoomLayout()[3] + thePerfectRoomLayout()[0] + thePerfectRoomLayout()[4] + thePerfectRoomLayout()[2] + thePerfectRoomLayout()[1];
}

function thePerfectRoomLayout() {
    bed = masterBedroom();
    someField = theIdontCareLand();
    forGuests = theHallway();
    sunnySpot = scotlandYard();
    lockedRoom = safestPlaceInTheGalaxy();
    return [bed, someField, lockedRoom, forGuests, sunnySpot];
}

// I mostly stay here, the well grants wishes
function scotlandYard() {
    var courtyardHTML = `
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/barrel-tree.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">S</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/coin@2x.svg" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/fountain.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">H</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">A</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/tree1.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/barrel-tree.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">V</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/tree2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">E</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">A</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
`;
    return courtyardHTML;
}

// Everyones welcome if they can get in
function theHallway() {
    var hallwayHTML = `
<div class="grid-item"> <img class="tile-in-grid" src="tiles/metal-wall3.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall3.png"></div>

<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-left.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <p class="text">T</p>
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <img class="tile-in-grid" src="tiles/ruby.png" style="position: absolute; top: 0; left: 0;">
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-right.png"></div>

<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-left.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <img class="tile-in-grid" src="tiles/ailien1.png" style="position: absolute; top: 0; left: 0;">
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <img class="tile-in-grid" src="tiles/coin@2x.svg" style="position: absolute; top: 0; left: 0;">
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-right.png"></div>

<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-left.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <img class="tile-in-grid" src="tiles/ailien2.png" style="position: absolute; top: 0; left: 0;">
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <p class="text">H</p>
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <p class="text">R</p>
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-floor.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-right.png"></div>

<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall3.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-bottom.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-bottom.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-bottom.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-bottom.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-bottom.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-bottom.png"></div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-bottom.png"></div>
<div class="grid-item" style="position:relative;">
    <img class="tile-in-grid" src="tiles/metal-floor.png" style="position: absolute; top: 0; left: 0;">
    <p class="text">E</p>
</div>
<div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall4-right.png"></div>
`;
    return hallwayHTML;
}

// Never been there, never will go, simply just don't care
function theIdontCareLand() {
    var fieldHTML = `
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/red-cobble.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-left.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass-right.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/grass.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">E</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/grass.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/drago1.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/grass.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/drago2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/grass.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">D</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/grass.png"></div>
`;
    return fieldHTML;
}

// Damn, did I have to search for that, messed everything up now
function searchForThatAntigravityThingy() {
    var whatRoomsCouldILeftIt = bed + someField + forGuests + sunnySpot;
    var tidyItABit = whatRoomsCouldILeftIt.replaceAll(/(\r\n|\n|\r)/gm, "");
    var investigateCloser = tidyItABit.split('<div');
    let howManyPlacesToLook = investigateCloser.length,  whereAmI;

  while (howManyPlacesToLook != 0) {

    // Lets get all the places
    whereAmI = Math.floor(Math.random() * howManyPlacesToLook);
    howManyPlacesToLook--;

    // Look under the bed for sure
    [investigateCloser[howManyPlacesToLook], investigateCloser[whereAmI]] = [
        investigateCloser[whereAmI], investigateCloser[howManyPlacesToLook]];
  }
    // Put bits and pices back together
    var tidyTheRoomUp = [];
    for (var i = 0; i < investigateCloser.length; i++) {
        tidyTheRoomUp.push("<div"+investigateCloser[i]);
    }
    bed = tidyTheRoomUp.slice(0,60).join().replaceAll(",","");
    someField = tidyTheRoomUp.slice(60,120).join().replaceAll(",","");
    forGuests = tidyTheRoomUp.slice(120,180).join().replaceAll(",","");
    sunnySpot = tidyTheRoomUp.slice(180,241).join().replaceAll(",","");
}

// Not sure how master it is but it's nice
function masterBedroom() {
    var bedroomHTML = `
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">E</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">M</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">O</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">O</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall2.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/bed1.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/tent1.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall2.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/bed2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/coin@2x.svg" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/wood-tile1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/wood-tile1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/melting-gold.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/tent2.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">N</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/cobblestone1.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/barrel-tree.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/metal-wall1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/cobblestone1.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/stone-wall.png"></div>
`;
    return bedroomHTML;
}

// I'm quite sure the dragons couldn't hear anything going on in my vault
function safestPlaceInTheGalaxy() {
    var vaultHTML = `
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-corner.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-up.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/Purple-cobble-corner.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-left.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">L</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/machinery1.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/machinery2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-right.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-left.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/coin@2x.svg" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">I</p>
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/machinery3.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/machinery4.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-right.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-left.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">G</p>
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold-bars.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-right.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-left.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold3.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold3.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold2.png" style="position: absolute; top: 0; left: 0;">
            <p class="text">N</p>
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold3.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold3.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-right.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-left.png"></div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold4.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold4.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold4.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold4.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold2.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold4.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item" style="position:relative;">
            <img class="tile-in-grid" src="tiles/purple-cobble.png" style="position: absolute; top: 0; left: 0;">
            <img class="tile-in-grid" src="tiles/gold3.png" style="position: absolute; top: 0; left: 0;">
        </div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-right.png"></div>

        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-corner.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/purple-cobble-down.png"></div>
        <div class="grid-item"><img class="tile-in-grid" src="tiles/Purple-cobble-corner.png"></div>
`;
    searchForThatAntigravityThingy();
    return vaultHTML;
}
