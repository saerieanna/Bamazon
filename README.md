# Bamazon

This application is only set up for the "customer tab" at the moment.  Upon entering *"node bamazonCustomer.js"* the main function, *runApp* will begin,
prompting the user to select a view mode.

Then, the customer is shown a table with the items available for purchase (the *customer function*).  The customer can indicate an item number and then the quantity they would like to purchase.  

After entering those values, a return message will show the quantity wanted and the total cost owed.  If the request for items is greater than the amount available, an error will flag and the customer will be prompted to purchase a different item (customer function will repeat).

If the item is availabe, the customer will then get a "thank you" message and the main *runApp* function will start again.  However, before that happens, the stock (after recent purchases) will update in the console.