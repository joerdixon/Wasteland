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

// Item Obj:
// name: string - name of item
// rarity:  string - rarity of item
// itemType: string - type of item
// maxAttachments: int - number of attachments on an item. (Usually 2)
// attachments: array - attachments on item (if any)

// type specific properties:
// Weapons
// isMelee: boolean - true if melee weapon
// isBroken: boolean - indicating if broken.
// wounds: int - wounds value
// damage: string - damage dice
// damageType: string - type of damage
// tag: string - any special tag the weapon has. (e.g. long, automatic)
// Ranged
// ammoType: string - type of ammunition for weapons
// magSize: int - number of bullets before reload.
// Armor
// armorClass: int - the armor class of the armor
// rangedArmorClass: int - the ranged armor class of the armor
// perk: string - any special effects the armor carries.

// Attachments
// name: string - name of the attachment
// effect: string

//DOM
let rollDisplay = document.getElementById("display");
let testDisplay = document.getElementById("testbox");
let form = document.getElementById("user-input");

// Items
const common = [
  {
    name: "Mace of Hours",
    rarity: "common",
    itemType: "melee weapon",
    attachments: [],
    isMelee: true,
    isBroken: false,
    wounds: 3,
    damage: "2d4",
    damageType: "Bludgeoning",
    tag: "Explosive",
  },
  {
    name: "Potato Cannon",
    rarity: "common",
    itemType: "armor",
    attachments: [],
    armorClass: 15,
    rangedArmorClass: 17,
    perk: "+2 stealth",
  },
  {
    name: "Rocket Hammer",
    rarity: "common",
    itemType: "ranged weapon",
    attachments: [],
    isMelee: false,
    isBroken: false,
    wounds: 1,
    damage: "d6 + 1",
    damageType: "Piercing",
    tag: "Explosive",
    ammoType: "Bullet",
    magSize: 2,
  },
];
const uncommon = [
  {
    name: "U Mace of Hours",
    rarity: "uncommon",
    itemType: "melee weapon",
    attachments: [],
    isMelee: true,
    isBroken: false,
    wounds: 3,
    damage: "2d4",
    damageType: "Bludgeoning",
    tag: "Explosive",
  },
  {
    name: "U Potato Cannon",
    rarity: "uncommon",
    itemType: "armor",
    attachments: [],
    armorClass: 15,
    rangedArmorClass: 17,
    perk: "+2 stealth",
  },
  {
    name: "U Rocket Hammer",
    rarity: "uncommon",
    itemType: "ranged weapon",
    attachments: [],
    isMelee: false,
    isBroken: false,
    wounds: 1,
    damage: "d6 + 1",
    damageType: "Piercing",
    tag: "Explosive",
    ammoType: "Bullet",
    magSize: 2,
  },
];
const rare = [
  {
    name: "R Mace of Hours",
    rarity: "rare",
    itemType: "melee weapon",
    attachments: [],
    isMelee: true,
    isBroken: false,
    wounds: 3,
    damage: "2d4",
    damageType: "Bludgeoning",
    tag: "Explosive",
  },
  {
    name: "R Potato Cannon",
    rarity: "rare",
    itemType: "armor",
    attachments: [],
    armorClass: 15,
    rangedArmorClass: 17,
    perk: "+2 stealth",
  },
  {
    name: "R Rocket Hammer",
    rarity: "rare",
    itemType: "ranged weapon",
    attachments: [],
    isMelee: false,
    isBroken: false,
    wounds: 1,
    damage: "d6 + 1",
    damageType: "Piercing",
    tag: "Explosive",
    ammoType: "Bullet",
    magSize: 2,
  },
];
const mythic = [
  {
    name: "M Mace of Hours",
    rarity: "mythic",
    itemType: "melee weapon",
    attachments: [],
    isMelee: true,
    isBroken: false,
    wounds: 3,
    damage: "2d4",
    damageType: "Bludgeoning",
    tag: "Explosive",
  },
  {
    name: "M Potato Cannon",
    rarity: "mythic",
    itemType: "armor",
    attachments: [],
    armorClass: 15,
    rangedArmorClass: 17,
    perk: "+2 stealth",
  },
  {
    name: "M Rocket Hammer",
    rarity: "mythic",
    itemType: "ranged weapon",
    attachments: [],
    isMelee: false,
    isBroken: false,
    wounds: 1,
    damage: "d6 + 1",
    damageType: "Piercing",
    tag: "Explosive",
    ammoType: "Bullet",
    magSize: 2,
  },
];

// Dice Roller w/ param for sides.
function Dice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Opens a crate
// Should return an object that is ready for the DOM.
function openCrate() {
  // Grab the array of the correct rarity
  let itemGroup = detItemGroup();
  // Grab a random item object from that array
  let item = itemGroup[Dice(itemGroup.length) - 1];
  // Checks if the item has a third slot and applys attachments if necessary.
  applyAttachments(item);
  // Prints the output on the DOM
  renderItem(item);
}

// Determines what item class to pull from. (e.g. Uncommon Armor)
// Should return the array of items to be selected from.
function detItemGroup() {
  let rarity = Dice(100);
  switch (true) {
    case rarity >= 97:
      return mythic;
      break;
    case rarity >= 81:
      return rare;
      break;
    case rarity >= 51:
      return uncommon;
      break;
    case rarity >= 1:
      return common;
      break;
    default:
      return common;
  }
}

// Displays the item rolled
function renderItem(item) {
  form.innerHTML = "";
  testDisplay.innerHTML = JSON.stringify(item);;
}

function detProperties() {
}

function applyAttachments(item) {
  return item;
}

