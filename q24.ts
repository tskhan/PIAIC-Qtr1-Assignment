let a24 = "Tariq";
let b24 = "Khan";
let c24 = a24;
let d24 = 4;
let e24 = 5;
let f24 = 4;
let lowera24 = a24.toLowerCase();
let lowerb24 = b24.toLowerCase();
let lowerc24 = lowera24;
let g24 = "Tariq"
let names:string [] = ["Tariq", "Saleem"]; 

//Tests for inequality with strings
console.log("Cond 1.a) Tests for inequality with strings");
console.log("-------------------------------------------");
console.log(`Is ${a24} = ${b24}, lets check`);
console.log(a24===b24);

//Tests for equality with strings
console.log("Cond 1.b: Tests for equality with strings");
console.log("-----------------------------------------");
console.log(`Is ${a24} = ${c24}, lets check`);
console.log(a24===c24);

//Tests for inequality using lower case function
console.log("\n\nCond 2.a: Test for Inequality with strings using lower function");
console.log("-------------------------------------------------------------------");
console.log(`Is ${lowera24} = ${lowerb24}, lets check`);
console.log(lowera24===lowerb24);

//Tests for equality using lowercase function
console.log("Cond 2.b: Test for equality with strings using lower function");
console.log("-------------------------------------------------------------");
console.log(`Is ${lowera24} = ${lowerc24}, lets check`);
console.log(lowera24===lowerc24);

//Numerical Tests for Inequality
console.log("\n\nCond 3.a: Numerical Test for Inequality");
console.log("-------------------------------------------");
console.log(`Is ${d24} = ${e24}, lets check`);
console.log(d24 === e24);

//Numerical Tests for equality
console.log("Cond 3.b: Numerical Test for equality");
console.log("-------------------------------------");
console.log(`Is ${d24} = ${f24}, lets check`);
console.log(d24 === f24);

//Numerical Test using Greater Than Operator
console.log("Cond 3.c: Numerical Test using Greater Than Operator");
console.log("----------------------------------------------------");
console.log(`Is ${d24} > ${f24}, lets check`);
console.log(d24 > f24);

//Numerical Test using Less Than Operator
console.log("Cond 3.d: Numerical Test using less Than Operator");
console.log("-------------------------------------------------");
console.log(`Is ${d24} < ${e24}, lets check`);
console.log(d24 < e24);

//Numerical Test using Greater than or equal to Operator
console.log("Cond 3.e: Numerical Test using greater than or equal to Operator");
console.log("-----------------------------------------------------------------");
console.log(`Is ${d24} >= ${e24}, lets check`);
console.log(d24 >= e24);

//Numerical Test using Less tha or Equal to Operator
console.log("Cond 3.e: Numerical Test using less than or equal to Operator");
console.log("-------------------------------------------------------------");
console.log(`Is ${d24} <= ${e24}, lets check`);
console.log(d24 <= e24);

//Tests using "and" and "or" operatorsr
console.log(`\n\nCond 4: Tests using "and" and "or" operator`);
console.log("-------------------------------------------");
console.log(`Is ${a24} = ${c24} & ${a24} = ${g24}, lets check`);
console.log(a24 === c24 && a24 === g24);
console.log(`Is ${a24} = ${b24} Or ${a24} = ${g24}, lets check`);
console.log(a24 === b24 || a24 === g24);

//Test whether an item is in a array
console.log(`\n\nCond 5.a: Test whether an item is in a array`);
console.log("------------------------------------------------");
console.log("The array includes " + [names]);
console.log(`\nPlease check whether "${a24}" is listed in it or not`);
if (names.includes(a24)) {
    console.log(`\n"${a24}" is listed in Array`)
}
else {
    console.log(`\n"${a24}" is not listed in Array`);
}

//Test whether an item is in a array
console.log(`\n\nCond 5.b: Test whether an item is in a array`);
console.log("--------------------------------------------");
console.log("The array includes " + [names]);
console.log(`\nPlease check whether "${b24}" is listed in it or not`);
if (names.includes(b24)) {
    console.log(`\n"${b24}" is listed in Array`)
}
else {
    console.log(`\n"${b24}" is not listed in Array`);
}