// icon_map.js
// Only contains SPECIAL CASES where the icon filename differs from itemID.toLowerCase()
// Everything else is handled automatically by the fallback in iconUrl()

const ICON_MAP = {
    // Blocks with different icon names
    "Grass": "dirtgrass",
    "WaterBucket": "water",
    "LavaBucket": "lava",
    "DiamondOre": "diamond",

    // Gems (ore name != gem name)
    // DiamondOre -> diamond already above

    // Special drops
    "BoneFragment": "bone",
    "GoldenFeather": "feather",

    // Weapons with different icon names
    "CobaltTrident": "cobalt_trident",
    "MorganiteStaff": "morganitewand",

    // Brick/lightstone with "garnet" inserted
    "SpessartiteBrick": "spessartitegarnetbrick",
    "SpessartiteLightstone": "spessartitegarnetlightstone",
    "SpessartiteStaff": "spessartitegarnetstaff",
    "SpessartiteGarnet": "spessartitegarnet",

    // Currency
    "GoldCoins": "goldcoin",
    "AdKey": "adkey",
};

// A fallback-friendly iconUrl function
// 1. Check ICON_MAP for special cases
// 2. Fall back to itemID.toLowerCase() (works for the vast majority of items)
function iconUrl(itemID) {
    if (!itemID || itemID === 'None' || itemID === 'none') return null;
    if (typeof itemID !== 'string') itemID = String(itemID);
    const file = ICON_MAP[itemID] || itemID.toLowerCase();
    return 'assets/items/' + file + '.png';
}
