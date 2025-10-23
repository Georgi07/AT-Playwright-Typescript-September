// Interface declaration
interface Car {
  type: string;
  model: string;
  color: string;
  horsePower: number;
}

// Object declaration
const car: Car = {
  type: "Fiat",
  model: "500",
  color: "white",
  horsePower: 100,
};

// Interface person object
interface Person {
  name: string;
  lastName: string;
  address: string;
  age: number;
  hobbies: string[];
  greeting: () => string;
}

// object with method and array value
const person: Person = {
  name: "Ivan",
  lastName: "Ivanov",
  address: "bul. Vitosha 30",
  age: 30,
  hobbies: ["football", "tennis", "hiking"],
  greeting: function () {
    return "Hello! My name is Ivan.";
  },
};

// properties access
person.name;
person.age;
person["address"];

person.greeting();
person["greeting"]();

// properties redeclaration
person.age = 35;
// console.log(person);

// let vs const redeclaration
let dog = { name: "Spark" };
dog.name = "Bobb";
dog = { name: "Nik" };

const cat = { name: "Lusi", age: 10 };
cat.name = "Kitty";
// cat = {name: "Tom", age: 20}

// explicit object type
const mouse: { name: string; favFood: string; age: number } = {
  name: "Jerry",
  favFood: "cheese",
  age: 10,
};

// Interfaces - optional parameters, read only and string literals

interface User {
  name: string;
  readonly email: string;
  //string literals
  role: "user" | "admin" | "superadmin" | "superuser";
  // optional parameters
  job?: string;
  password?: string | number;
  location?: string;
}

const user: User = {
  name: "Tom",
  email: "tom@mail.com",
  role: "superadmin",
  location: "Bulgaria",
  job: "QA",
};
// optional parameter added later
user.password = 5546122;
// console.log(user);

const secondUser: User = {
  name: "Tom",
  email: "tom@mail.com",
  role: "superuser",
  job: "QA",
};

interface UserPermissions extends User {
  permissions: string;
}

const thirdUser: UserPermissions = {
  name: "Tom",
  email: "tom@mail.com",
  role: "superuser",
  job: "QA",
  permissions: "denied",
};

// exercise sum total price
interface Product {
  name: string;
  price: number;
  getTotalPrice: (quantity: number) => number;
}

const phone: Product = {
  name: "Nokia",
  price: 100,
  getTotalPrice: function (quantity: number) {
    return quantity * this.price;
  },
};

function orderDetails(quantity: number, product: Product) {
  console.log(`Order for: ${product.name}`);
  console.log(`Product quantity: ${quantity}`);
  console.log(`Product unit price: ${product.price}$`);
  console.log(`Total price: ${product.getTotalPrice(quantity)}$`);
}

orderDetails(5, phone);
