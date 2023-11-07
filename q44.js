/**Sandwiches:

Write a function that accepts a array of items a person wants on a sandwich.

The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.

Call the function three times, using a different number of arguments each time. */
/**Rest Parameter

When the number of parameters that a function will receive is not known or can vary,
we can use rest parameters. In JavaScript, this is achieved with the "arguments" variable.
However, with TypeScript, we can use the rest parameter denoted by ellipsis ...*/
function make_sandwhich(...ingredients) {
    console.log(`Sandwhich Details`);
    for (let Ingredients of ingredients) {
        console.log(`+ ${Ingredients}`);
    }
    console.log(`\n`);
}
make_sandwhich("Cheese", "Ketchup", "Mayo", "Chicken");
make_sandwhich("Cheese", "Ketchup");
make_sandwhich();
export {};
// function makeSandwich(...items: string[]): void {
//     console.log("Sandwich Summary:");
//     for (const item of items) {
//             console.log(`- ${item}`);
//         }
//     }
//     console.log("\n");
// // Call the function three times with different numbers of arguments
// makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
// makeSandwich('Peanut Butter', 'Jelly');
// makeSandwich();
