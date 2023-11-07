/**Great Magicians:

Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name.

Call show_magicians() to see that the list has actually been modified. */
let magiciansName = ["David Copperfield", "David Blaine", "Harry Houdini", "Penn & Teller"];
function show_magicians(magician_name) {
    return `${magician_name}`;
}
function make_great(magician_name) {
    return `Great ${magician_name}`;
}
for (let Magician_Name of magiciansName) {
    console.log(make_great(Magician_Name));
}
export {};
