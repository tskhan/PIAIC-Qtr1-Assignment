let list :string [] = ["Talha", "Noman", "Saad"]
console.log("Hey " + list[0] + ", Lets have dinner this Sunday");
console.log("Hey " + list[1] + ", Lets have dinner this Sunday");
console.log("Hey " + list[2] + ", Lets have dinner this Sunday");
console.log("\nJust came to know that " + list[1] + " is not coming due to some issue");
console.log("\nIn his place now Waqar will join the dinner\n")
list.splice(1,1,"Waqar");
console.log("Hey " + list[0] + ", Lets have dinner this Sunday");
console.log("Hey " + list[1] + ", Lets have dinner this Sunday");
console.log("Hey " + list[2] + ", Lets have dinner this Sunday");