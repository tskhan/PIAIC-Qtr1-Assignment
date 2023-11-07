/**Pizzas: 
 * 
Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just 
the name of the pizza. For each pizza you should have one line of output containing a simple 
statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an 
additional sentence, such as I really love pizza!*/

let pizza:string [] = ["Pepperoni", "Margherita", "Hawaiian"];

console.log(`Use a for loop to print the name of three pizza\n`)
for (let pizzaName of pizza) {
    console.log(`${pizzaName}`);
}

console.log(`\nModify your for loop to print a sentence using the name of the pizza\n`)
for (let pizzaName of pizza) {
    console.log(`I like ${pizzaName} Pizza`);
}

console.log(`\nPizza is very much addictive and i can't imagine life without it\n
I wait entire week just to eat those heavenly slices of pizza in weekends.\n
Pizza is the only dish that can be eaten anytime in any condition.\n\nI really love Pizza`);
