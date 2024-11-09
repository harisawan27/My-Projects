// Create an array to store products
var products = [];
// Function to display products in the table
function displayProducts() {
    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = ''; // Clear previous rows
    products.forEach(function (product) {
        var row = "<tr>\n            <td>".concat(product.name, "</td>\n            <td>").concat(product.quantity, "</td>\n            <td>").concat(product.price, "</td>\n        </tr>");
        tableBody.innerHTML += row;
    });
}
// Function to add a product from input fields
function addProduct() {
    // Get values from input fields
    var name = document.getElementById("productName").value;
    var quantity = parseInt(document.getElementById("productQuantity").value);
    var price = parseFloat(document.getElementById("productPrice").value);
    // Validate the input
    if (!name || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }
    // Add the new product to the array
    products.push({ name: name, quantity: quantity, price: price });
    // Clear the input fields
    document.getElementById("productName").value = '';
    document.getElementById("productQuantity").value = '';
    document.getElementById("productPrice").value = '';
    // Update the table with the new product
    displayProducts();
}
// Initial display of products
displayProducts();
