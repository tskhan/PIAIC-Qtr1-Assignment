/*Large Shirts:

Modify the make_shirt() function so that shirts are large by default with a message that reads
I love TypeScript. 

Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt(size:string = "Large", message:string = "I love TypeScript") {
    return {
        Size: size,
        Message: message,
    };
}

let largeShirt = make_shirt();
let mediumShirt = make_shirt("Medium");
let smallShirt = make_shirt("Small", "I love T-Shirts");

console.log("Large Shirt:");
console.log("Size:",  largeShirt.Size);
console.log("Message", largeShirt.Message);

console.log("\nMedium Shirt:");
console.log("Size:",  mediumShirt.Size);
console.log("Message", mediumShirt.Message);

console.log("\nMedium Shirt:");
console.log("Size:",  smallShirt.Size);
console.log("Message", smallShirt.Message);