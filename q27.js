/**Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
 *
    • If the alien is green, print a message that the player earned 5 points.

    • If the alien is yellow, print a message that the player earned 10 points.

    • If the alien is red, print a message that the player earned 15 points.

    • Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
//Version 1:
let alienColor = "green";
console.log(`Version 1: The alien color is "${alienColor}"`);
if (alienColor === "green") {
    console.log("\The player earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("The player earned 10 points");
}
else if (alienColor === "red") {
    console.log("The player earned 15 points");
}
//Version 2:
let alienColor2 = "yellow";
console.log(`\nVersion 2: The alien color is "${alienColor2}"`);
if (alienColor2 === "green") {
    console.log("The player earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("The player earned 10 points");
}
else if (alienColor2 === "red") {
    console.log("The player earned 15 points");
}
//Version 3:
let alienColor3 = "red";
console.log(`\nVersion 3: The alien color is "${alienColor3}"`);
//Version 1:
if (alienColor3 === "green") {
    console.log("The player earned 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("The player earned 10 points");
}
else if (alienColor3 === "red") {
    console.log("The player earned 15 points");
}
export {};
