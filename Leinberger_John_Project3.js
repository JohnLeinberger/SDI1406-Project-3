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

//functions
function jsonHandler (json){
    for(var i = 0; i < json.inventory.length; i++){
        var inventory = json.inventory[i];
        console.log("Food type: " + inventory.food + " Quantity: " + inventory.quantity);
    }
};

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
        keepGo = confirm("Do you want to keep on walking?");
    }
    
    lookForFood = confirm("Do you want to search the area for food?");
    return lookForFood;
};

//main code
jsonHandler(foodInventory);

walkMore = confirm("Do you want to continue walking down the road?");

searchForFood = keepWalking(walkMore);
