//requirements//
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");
var config = require("./config.js");

// create the connection information for the sql database
var dbConnection = mysql.createConnection(config);

dbConnection.connect(function(err) {
    if (err) throw err;

});
// below is the runApp function--main menu if you will//
///////////////////////////////////////////////////////////////////////////////////
var runApp = function() {
    inquirer.prompt({
        name: "youChoose",
        type: "list",
        message: "You are currently connected to Bamazon. Welcome - How would you like to proceed?",
        choices: ["Enter customer view", "Enter managerial view", "Enter supervisor view"]
    }).then(function(answer) {

        switch (answer.youChoose) {
            case "Enter customer view":
                customer();
                break;

            case "Enter managerial view":
                manager();
                break;

            case "Enter supervisor view":
                supervisor();
                break;
        }
    });
};

runApp();

//entering into customer view//
//first: function to display all items available: ids, names, prices
function customer() {
    var items = [];
    dbConnection.query("SELECT item_id,product_name,department_name,price,stock_quantity FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            items.push(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity)
        }
        console.log("listed as: item number, product, department, item price and stock");
        console.table(res);

        inquirer.prompt([{
            name: "itemId",
            type: "input",
            message: "Which product would you like to buy ? (indicate item id and hit enter)",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "How many units of the product would you like to buy? (indicate quantity and hit enter)",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }

            }
        }]).then(function(answer) {
            var chosenID = answer.itemId - 1;
            var chosenProduct = res[chosenID];
            var chosenQuantity = answer.Quantity;
            console.log(answer.itemId);
            if (chosenQuantity <= res[chosenID].stock_quantity) {
                console.log("Your total for " + "(" + answer.Quantity + ")" + " - " + res[chosenID].product_name + " is:$ " + res[chosenID].price.toFixed(2) * chosenQuantity);

                dbConnection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: (res[chosenID].stock_quantity - chosenQuantity)
                }, {
                    item_id: answer.itemId
                }], function(err, res) {
                    console.log("Thanks for your purchase.");
                    dbConnection.query("SELECT * FROM products", function(err, res) {
                        if (err) throw err;
                        console.table(res);
                        console.log("udpated stock on Bamazon is shown above");
                        runApp();
                    });

                });

            } else {
                console.log("error...insuffucient quantities");
                customer();
            }



        })
    })


}

//STOP HERE OR CONTINUE FOR NEXT PART
// dbConnection.end();
