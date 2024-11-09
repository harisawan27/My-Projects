// Define a product interface
interface Product {
    name: string;
    quantity: number;
    price: number;
}

// Create an array to store products
const products: Product[] = [];

// Function to display products in the table
function displayProducts() {
    const tableBody = document.querySelector("tbody");
    tableBody!.innerHTML = ''; // Clear previous rows
    products.forEach(product => {
        const row = `<tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
        </tr>`;
        tableBody!.innerHTML += row;
    });
}

// Function to add a product from input fields
function addProduct() {
    // Get values from input fields
    const name = (document.getElementById("productName") as HTMLInputElement).value;
    const quantity = parseInt((document.getElementById("productQuantity") as HTMLInputElement).value);
    const price = parseFloat((document.getElementById("productPrice") as HTMLInputElement).value);

    // Validate the input
    if (!name || quantity <= 0 || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    // Add the new product to the array
    products.push({ name, quantity, price });
    
    // Clear the input fields
    (document.getElementById("productName") as HTMLInputElement).value = '';
    (document.getElementById("productQuantity") as HTMLInputElement).value = '';
    (document.getElementById("productPrice") as HTMLInputElement).value = '';

    // Update the table with the new product
    displayProducts();
}

// Initial display of products
displayProducts();
