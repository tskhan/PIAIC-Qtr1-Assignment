/**Unchanged Magicians:

Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
magicians’ names.

Because the original array will be unchanged, return the new array and store it in a separate array.

Call show_magicians() with each array to show that you have one array of the original names and
one array with the Great added to each magician’s name. */
let magiciansName = ["David Copperfield", "David Blaine", "Harry Houdini", "Penn & Teller"];
let copy_magiciansName = (JSON.parse(JSON.stringify(magiciansName))).sort();
function show_magicians(magician_name) {
    return `${magician_name}`;
}
function make_great(magician_name) {
    return `Great ${magician_name}`;
}
for (let Magician_Name of magiciansName) {
    console.log(make_great(Magician_Name));
}
function copy_show_magicians(copy_magician_name) {
    return `${copy_magician_name}`;
}
console.log(`------------------------------`);
function copy_make_great(copy_magician_name) {
    return `Great ${copy_magician_name}`;
}
for (let copy_Magician_Name of copy_magiciansName) {
    console.log(copy_make_great(copy_Magician_Name));
}
export {};
