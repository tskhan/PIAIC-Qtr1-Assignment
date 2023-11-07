/**Cars:
 
Write a function that stores information about a car in a Object.

The function should always receive a manufacturer and a model name.

It should then accept an arbitrary number of keyword arguments.

Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.

Print the Object that’s returned to make sure all the information was stored correctly. */
function storeCarInfo(manufacturer, model, ...details) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (let [key, value] of details) { //accepts additional details as an array of tuples [key, value]
        car[key] = value;
    }
    return car;
}
console.log(storeCarInfo('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]));
export {};
