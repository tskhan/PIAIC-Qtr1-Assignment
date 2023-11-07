/**
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has,
print a message that the person will need to enter a new username. If a username has not been used,
print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
let current_users = ["Tariq", "Kifayat", "Shoaib", "Noman", "Waqar"];
let new_users = ["tariq", "Fabiha", "SHOAIB", "Moin", "Umer"];
let current_users_lower = current_users.map(element => {
    return element.toLowerCase();
});
let current_users_upper = current_users.map(element => {
    return element.toUpperCase();
});
for (let i32 = 0; i32 < new_users.length; i32++) {
    if (!current_users.includes(new_users[i32]) && !current_users_lower.includes(new_users[i32]) && !current_users_upper.includes(new_users[i32])) {
        console.log("username " + new_users[i32] + " is available");
    }
    else {
        console.log("This username " + new_users[i32] + " already exists, please choose another username");
    }
}
export {};
// for (let i32=0; i32<current_users.length; i32++) {
//     for (let j32=0; j32<new_users.length; j32++) {
//         if (new_users[j32] === current_users[i32] || current_users[i32].toLowerCase() || current_users[i32].toUpperCase()) {
//             console.log("Username already exist, please enter a new user name")
//         }
//         else {
//             console.log("Username " + new_users[j32] + " is available")
//         }
//     }
// }
