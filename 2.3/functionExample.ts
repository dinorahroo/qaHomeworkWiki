//makeAMeal = Function name; Order = Parameter Name;
function makeAMeal(order: string): string {
    return order + " $15.00";
};
//call the functiokn with the order
let firstOrder = makeAMeal(" Two gf pizzas, cake, and water");
let secondOrder = makeAMeal("Aubergine bowl, cheesy bread, strawberry water");
let thirdOrder = makeAMeal("Salad, chicken, pomegranite seeds, and water");

console.log(firstOrder);
console.log(secondOrder);
console.log(`To-Go Order for Dinorah: ${thirdOrder}`);