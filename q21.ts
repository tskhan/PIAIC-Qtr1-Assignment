let cityInformation: {name:string; population:number; country:string} [] = 
[
    {
        name: "Karachi",
        population: 1000000,
        country: "Pakistan"
    },

    {   name: "Lahore",
        population: 340000,
        country: "Pakistan"
    },

    {   name: "Newyork",
        population: 780000,
        country: "United States"
    },  
]

console.log("List of Cities:");
console.log("-------------------------");
for (let city of cityInformation) {
  console.log(`Name: ${city.name}`);
  console.log(`Population: ${city.population}`);
  console.log(`Country: ${city.country}`);
  console.log("-------------------------");
}