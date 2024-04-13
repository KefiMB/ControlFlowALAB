console.log("I did it!")

// Part 1
// Predicting the plant growth after a specific number of weeks
let growth = 20 * 2 
x = growth

console.log(growth)

// Implementing control flow to make decisions 
const area = 3.14 * 5 * 5
console.log (area) //78.5

const plantCount = "currentPlantCount"
const maxCapacity = 98.125;
const eightyPercentCapacity = 0.8 * maxCapacity;
if (plantCount > eightyPercentCapacity)
console.log("Pruning is needed.")
console.log("No pruning needed.")

const weeks = x;
const initialPlantCount = 20;
const minSpacePerPlant = 0.8;
const finalPlantCount = initialPlantCount * Math.pow(2, weeks);
const occupiedArea = finalPlantCount * minSpacePerPlant;
if (finalPlantCount > 0.8 * maxCapacity) {
    console.log("Pruning is needed.");
} else if (finalPlantCount >= 0.5 * maxCapacity && finalPlantCount <= 0.8 * maxCapacity) {
    console.log("Plant growth is at an acceptable rate.");
} else {
    console.log("More plants can be planted.");
}
// Part 2
console.log("Week 1: " + finalPlantCount + 
"plants, " + occupiedArea + " square meters.");
console.log("Week 2: " + finalPlantCount * 2 + 
" plants, " + (occupiedArea * 2) + " square meters.");
console.log("Week 3: " + finalPlantCount * 4 +
" plants, " + (occupiedArea * 2) + " square meters.");
