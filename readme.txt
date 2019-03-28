Deloitte Digital Development test
By Keerthi Viswanathan
written in react.js

Folder structure of app

src/ (root folder)

__test__  (folder for tests)
    |- add_button.test.jsx
    |- cart_totals.test.jsx    
    |- cart_voucher.test.jsx

components (folder for cart and product components)
	|-cart
    |   - cart_item.jsx
    |   - cart_totals.jsx        
    |   - cart_voucher.jsx
    |   - display_cart.jsx (main cart component)
    |
	|- products
        - add_button.jsx
        - category.jsx        	   
        - display_product.jsx (main product component)
        - product.jsx

css    (folder for style sheets)
	|- grids-responsive-min.css
	|- pricing.css
	|- pure-min.css

index.js  (Starts app up)
products.jsx (Mock data)



To install, 

- clone repository to local drive

- change directory to deloitte-test

- type "npm install"

To Run , type "npm start"

To run the tests  type "npm test"

(I have three tests in the __test__ directory) 


Notes:

Following steps were carried out for manual testing to test the stories

1]Observe totals when starting app    
	Expected: total and subtotal should be 0.00

2]Note down the price of an item then click on 'add to cart' button for that item
	Expected: total and subtotal should  display the noted price.

3] Repeat test 2
	Expected: total and subtotal should increment by the newly added items price

4] Note down the total and subtotal, then click on remove button for the last added item in the cart
Expected: total and subtotal should decrement by  the removed items price

5] In the voucher input field, type any 5 characters then click "Add voucher"
Expected: Should display message  "Voucher codes have to be a 4 digit number"

6] In the voucher input field, type "1234" then click "Add voucher" and observe the total
Expected: The total should decrement by 5

7] Find a product with quantity "0 in stock", and observe the button
Expected: The button should be disabled and displayed with text "Sorry This item is not in stock"





