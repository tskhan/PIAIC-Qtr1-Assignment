/**
 Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
 Imagine you are writing code that will print a greeting to each user after they log in to a website. 
 Loop through the array, and print a greeting to each user:

 • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
 */

let userName:string [] = ["Tariq", "Noman", "Admin", "Shoaib", "Kifayat"];
for (let i30=0; i30<userName.length; i30++) {
    if (userName[i30] != "Admin") {
        console.log("Hello " + userName[i30] + ", thank you for log in again!");        
    }
else {
    console.log("Hello Admin, would you like to see a status report?")
}
}