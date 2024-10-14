// Wasteland Crates

// Pseudocode

// Determine Rarity
// Determine Item Type
// Pick Item from Designated Pool (eg. Uncommon Armor)
    // If weapon
        // If broken, return broken weapon with random attachment.
    // Determine attachment slots
    // determineAttachments
        // Determine attachment compatability (Melee/Ranged)
        // Determine attachment rarity (Normal, Special)
        // Add attachments

// Print info

//DOM

let rollDisplay = document.getElementById("roll-display");
let testDisplay = document.getElementById("testbox");


const commons = [

]

// Determine Rarity



// Possible Items

// Initiates the opening of the crate.
function unsealCrate() {
    testDisplay.innerHTML = Dice(20);
}

// Dice Roller w/ param for sides.
function Dice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

