//both objects for order and counting flavors
const froyoOrder = {};
const froyoCount = {};
// testing const userFroyoOrder = "vanilla,vanilla,strawberry"

const userFroyoOrder = prompt(
   "Please enter your foyo order separated by commas.",
"vanilla,vanilla,strawberry");

//The user's input string is split into an array of strings
  const froyoArray = userFroyoOrder.split(",")
  froyoOrder.order = froyoArray

//loop  through the array of flavors
for (var i=0; i <= froyoArray.length - 1; i++){
  console.log()
}
//looping through array
for (const order of froyoArray) {
  console.log(order);
}

//counting flavors
froyoArray.forEach((x) => {
  froyoCount[x] = (froyoCount[x] || 0) + 1;
});

console.table(froyoCount)
console.table(froyoOrder)
