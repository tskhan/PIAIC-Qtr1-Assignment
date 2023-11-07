let name3 = "tARIQ kHAN";
let lowercaseName3 = name3.toLowerCase();
let uppercaseName3 = name3.toUpperCase();
let titlecaseName3 = "";
console.log(lowercaseName3);
console.log(uppercaseName3);
for (let i3 = 0; i3 < name3.length; i3++) {
    if (i3 === 0 || name3[i3 - 1] === " ") {
        titlecaseName3 += name3[i3].toUpperCase();
    }
    else {
        titlecaseName3 += name3[i3].toLowerCase();
    }
}
console.log(titlecaseName3);
export {};
