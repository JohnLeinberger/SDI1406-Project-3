//John Leinberger
//SDI 1406
//Project 3
//Project using own flowchart and JSON data


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

var jsonHandler = function (json){
    for(var i = 0; i < json.inventory.length; i++){
        var inventory = json.inventory[i];
        console.log("Food type: " + inventory.food + " Quantity: " + inventory.quantity);
    }
};


jsonHandler(foodInventory);
