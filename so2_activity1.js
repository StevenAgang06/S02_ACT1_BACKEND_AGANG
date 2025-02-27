// Creating an object
const products = {
  name: [
    ["Nike", "Addidas", "Puma"],
    ["Black T-shirt", "White T-shirt", "Red T-shirt"],
    ["Black Pants", "Blue Jeans", "Red Pants"],
  ],

  price: [
    [100, 150, 50],
    [50, 75, 25],
    [150, 60, 40],
  ],

  stock: [
    [10, 15, 20],
    [7, 4, 8],
    [2, 9, 7],
  ],

  category: [["Shoes"], ["T-shirt"], ["Pants"]],
};

// Displaying all products and its information

let displayProduct = function () {
  for (let iterator = 0; iterator < products.category.length; iterator++) {
    console.log("Products Category: " + products.category[iterator]);
    console.log("Products Name: " + products.name[iterator]);
    console.log("Products Price: " + products.price[iterator]);
    console.log("Products Stocks: " + products.stock[iterator]);
    console.log("\n");
  }
};

displayProduct();

// Editing pre-defined product

let editProduct = function () {
  console.log("Editing this item...");
  console.log("Category: " + products.category[0]);
  console.log("Product Name: " + products.name[0]);
  console.log("Product Price: " + products.price[0]);
  console.log("Product Stocks: " + products.stock[0]);

  products.name[0] = ["FUBU", "JORDAN", "CLARKS"];
  products.price[0] = [100, 50, 25];
  products.stock[0] = [100, 100, 100];
  console.log("Done.. Displaying the products again... \n \n");
  displayProduct();
};

editProduct();

// Emptying selected products
let removeProduct = function () {
  console.log("Selected index will become empty");
  console.log("Select from 1 - 3");
  var index = prompt("Enter the index");
  var inner_array = prompt("Enter the index for inner array");
  if (isNaN(index) || index == 0 || isNaN(inner_array) || inner_array == 0) {
    console.log("Invalid index. Exiting....");
    return;
  } else {
    --index;
    --inner_array;
    console.log(
      "The following items will be remove: " +
        products.name[index][inner_array],
      products.price[index][inner_array],
      products.stock[index][inner_array],
      products.category[index][inner_array]
    );
    console.log("Done.. Displaying the products again");
    products.name[index][inner_array] = undefined;
    products.price[index][inner_array] = undefined;
    products.stock[index][inner_array] = undefined;
    products.category[index][inner_array] = undefined;
    displayProduct();
  }
};

removeProduct();
