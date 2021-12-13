let dogs = ["BullDog", "Beagle", "LabraDog"];

//Old array
var allDogs = " ";
for (var i= 0; i< dogs.length; i++)
{
    allDogs += dogs[i] + " ";
}
console.log("Old :" + allDogs);

//New Array
allDogs = " ";
for (let dog of dogs)
{
    allDogs += dog + " ";
}
console.log("New :" + allDogs);