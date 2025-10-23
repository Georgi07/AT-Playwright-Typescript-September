// Steps
// 1.Create an interface Product with the following fields:
// name: string
// price: number
// category: "food" | "clothes" | "electronics"
// 2.Create a type Category with the possible categories (food, clothes, electronics)
// 3.Create an interface Customer with the following fields:
// name: string
// email: string
// cart: Product[] — an array containing the products in the customer’s cart
// 4. Create two example products (e.g., an apple and a T-shirt).
// 5. Create one customer who has both products

type Category = "food" | "clothes" | "electronics";

interface Product {
  name: string;
  price: number;
  category: Category;
}

interface Customer {
  name: string;
  email: string;
  cart: Product[];
}

const apple: Product = { name: "Apple", price: 2, category: "food" };
const tShirt: Product = { name: "T-Shirt", price: 20, category: "clothes" };
// add more products especially for electronics

const products: Product[] = [apple, tShirt];

const customer: Customer = {
  name: "Mladen Petrov",
  email: "mladen@email.com",
  cart: products,
};
// add second customer

// add function displayCart - display cart customer name and products
// add function filterByCategory - receive products and category as parameters and filter the products by given category
// add function calculateTotalPrice - receive customer data and combine all products price
//customer.cart[0].price
//customer.cart[1].price
//...

export {};
