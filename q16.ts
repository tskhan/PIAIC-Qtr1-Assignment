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
console.log("\nI have got a bigger table now, so can invite more guests\n");
list.unshift("Kifayat");
list.push("Kamran");
list.splice(2,0,"Khurram");
console.log("Hey " + list[0] + ", Lets have dinner this Sunday");
console.log("Hey " + list[1] + ", Lets have dinner this Sunday");
console.log("Hey " + list[2] + ", Lets have dinner this Sunday");
console.log("Hey " + list[3] + ", Lets have dinner this Sunday");
console.log("Hey " + list[4] + ", Lets have dinner this Sunday");
console.log("Hey " + list[5] + ", Lets have dinner this Sunday");