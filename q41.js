/**Magicians:

Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
let magiciansName = ["David Copperfield", "David Blaine", "Harry Houdini", "Penn & Teller"];
function show_magicians(magician_name) {
    return `${magician_name}`;
}
for (let Magician_Name of magiciansName) {
    console.log(show_magicians(Magician_Name));
}
export {};
