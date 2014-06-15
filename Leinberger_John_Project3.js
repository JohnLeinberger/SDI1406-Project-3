//John Leinberger
//SDI 1406
//Project 3
//Project using own flowchart and JSON data

//global variables
var foodInventory = {
    "inventory": [
        {
            "food": "Tomato Soup",
            "quantity": 2
        },
        {
            "food": "Spam",
            "quantity": 1
        },
        {   "food": "Baked Beans",
            "quantity": 3
        }
    ]
};

var walkMore = true;
var searchForFood = false;
var foodFound;

//functions
function jsonHandler (json){
    for(var i = 0; i < json.inventory.length; i++){
        var inventory = json.inventory[i];
        console.log("Food type: " + inventory.food + " Quantity: " + inventory.quantity);
    }
};

//argument received is a boolean, returns a boolean as well
//cycles through a loop and asks user if they want to keep walking or until they reach their limit.
//then asks user if they want to search the next area.
function keepWalking(confirmWalk) {
    
    //local variables
    var keepGo = confirmWalk;
    var lookForFood = true;
    var counter = 0;
    var limitWalk = 10;
    var distanceLeft = 0;
    
    while(keepGo === true){
        counter++;
        distanceLeft = limitWalk - counter;
        if (distanceLeft < 0) {
            console.log("You have walked your limit of " + counter + " miles today, you must rest now.");
            break;
        }
        console.log("You have walked " + counter + " miles today, you can walk another " + distanceLeft + " miles before you rest.");
        keepGo = confirm("You can walk for another " + distanceLeft + " miles, do you want to keep on walking?");
    }
    
    lookForFood = confirm("Do you want to search the area for food?");
    return lookForFood;
};

//argument received is a boolean, returns a string
//simple if else function to determine which food the user will find when they stop for rest.
function searchArea(searchYesNo){
    
    //local variables
    var foodName1 = "Tomato Soup";
    var foodName2 = "Baked Beans";
    
    if (searchYesNo === false) {
        console.log("You decided not to look for any food in the area, as you lay down to rest some you feel a lump under your back, it's a can of " + foodName1 + ".");
        return foodName1;
    }else{
        console.log("You look around the building near you and you stumble upon a can of " + foodName2 + ".");
        return foodName2;
    }
};

//arguments received are json data and a string
//updates the json data with the quantity, by sorting through the array of items
function jsonUpdate(json, foodName){
    for(var i = 0; i < json.inventory.length; i++){
        var inventory = json.inventory[i];
        if (inventory.food === foodName){
            inventory.quantity += 1;
        }
    }
};

//main code

//for bug checking only
jsonHandler(foodInventory);

walkMore = confirm("Do you want to continue walking down the road?");

searchForFood = keepWalking(walkMore);

foodFound = searchArea(searchForFood);

jsonUpdate(foodInventory, foodFound);

//for bug checking only
jsonHandler(foodInventory);

