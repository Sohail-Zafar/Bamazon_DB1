// Assignment: Node.js & MySQL
// File: bamazonCustomer.js
// Programmer: Sohail Zafar
// MySql database name: bamazon_db
// Bamazon is the name of the application. This application use a MySql database to track a store inventory.
// It first displays current inventory.Then asks the user to select a product by item_Id and enter in product quantity.
// Next it checks the database to see if there is there is enough quantity of item to fill the order. If there is the
// required quantity, it then fills to order and then the application updates the MySql to reflect the new quantity.
// After order is placed the application displays the total dollar amount of order.

// Imports required modules and set up global variables.
var mysql = require("mysql");
var inquirer = require("inquirer");
var item_Id_Ordered;
var item_Qty_Ordered;
var newQuantity;
var totalSales;

// Establishes connection to database.
var connection = mysql.createConnection({
  host: "localhost",


  
  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

 //Reading Data from DB and displaying contents of Database. Show the current inventory of the Bazmazon store.
connection.connect(function(err) {
  if (err) throw err;
  console.log("");
  connection.query("SELECT * From products", function(error, data){
  for ( var i = 0; i < data.length; i++){
  console.log("---------------------------------------------------------------------------");
  console.log("- item_id     product_name     department_name    price     stock_quantity -");
  console.log("- " + data[i].item_id + "           " + data[i].product_name + "       " + data[i].department_name + "          " + data[i].price + "       " + data[i].stock_quantity);
} 
  });
});

// Call the takeOrder function to take customer's order.
takeOrder();

// Function takeOrder(). This function inputs product ID and quantity of product to be ordered.
// Then calls the checkQuantityUpdateDisplay() function to check database for quantity of product.
function takeOrder(){
  console.log("");
  inquirer.prompt([{
    type: "input",
    name: "productID",
    message: "What is the product Id you like to order?: "
  },
  {
    type: "input",
    name: "productQuantity",
    message: "What is the quantity of product you would like to order?: "
  }
  ]).then(function(answers){
    item_Id_Ordered = answers.productID;
    item_Qty_Ordered = answers.productQuantity;
    console.log("The product your ordered has the Id of: " + item_Id_Ordered);
    console.log("You ordered this quantity: " + item_Qty_Ordered);
    checkQuantityUpdateDisplay();
  });
}

// Function checkQuantityUpdateDisplay(). Checks the database for the quantity of the product order by Item_Id.
// If there is enough quantity, then an ordered is placed. If there is not enough quantity of product then this
// function display message 'insufficient quantity'. If there is enough of the product in stock it displays the 
// total price of order and updates the database to reflect the new quantity of product.

function checkQuantityUpdateDisplay() {

    
    connection.query("SELECT * From products WHERE ?", {item_id: item_Id_Ordered }, function(error, data){
      if (data[0].stock_quantity < item_Qty_Ordered) {
         console.log("Insufficient quantity.");
    } else {
         newQuantity = data[0].stock_quantity - item_Qty_Ordered;
         totalSales = data[0].price * item_Qty_Ordered;
         connection.query("UPDATE products SET ? WHERE ?",[{stock_quantity: newQuantity},{item_id: item_Id_Ordered}],function(err){
           if (err) throw err;
           console.log("Database updated.");
      });
      console.log("The total cost of order is: " + totalSales);
    }
    });
}
