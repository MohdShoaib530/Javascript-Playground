// Define the store's inventory with prices in USD
const inventory = {
    item1: 10,  // Price in USD
    item2: 20,
    item3: 30,
};

// Define the exchange rate
const exchangeRateUSDToINR = 80;

// Function to convert prices from USD to INR
const convertToINR = (priceUSD) => priceUSD * exchangeRateUSDToINR;

// Use the map method to convert prices to INR and store them in an array
const inventoryArray = Object.entries(inventory).map(([item, priceUSD]) => ({
    item,
    priceINR: convertToINR(priceUSD),
}));
console.log(inventoryArray);

// Convert the array back into an object
const inventoryINR = inventoryArray.reduce((result, { item, priceINR }) => {
    result[item] = priceINR;
    return result;
}, {});

console.log("Inventory in INR:", inventoryINR);
