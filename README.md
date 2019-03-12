# Bamazon
<html>
<body>
<h2>Bamazon inventory MySql Database</h2>
<p>This application use a MySql database to track a store inventory.<br>
It first displays current inventory.Then asks the user to select a product by item_Id and enter in product quantity.<br>
Next it checks the database to see if there is there is enough quantity of item to fill the order. If there is the<br>
required quantity, it then fills to order and then the application updates the MySql to reflect the new quantity.<br>
After order is placed the application displays the total dollar amount of order.<br>
</p>
<h3>Instruction and usage</h3>
<p>
1. Execute 'node bamazonCustoner.js' at command line.<br>
2. The items for sale will be shown. Select id of item.<br>
3. Enter id of item when prompted to.<br>
4. Enter quantity of item wish to purchase.<br>
5. If there is enough of item in stock, the order will be placed and total price of order will be displayed.<br>
</p>
<br>
<p>
<img src="\image\Bamazon_Display.png" alt="Bamazon">
Bamazon console display.
</p>
</html>