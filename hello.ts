interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    stock: number;
}

interface Customer {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}

function createProduct(): Product {
    return {
        id: 0,
        name: "",
        price: 0,
        description: "",
        category: "",
        stock: 0
    };
}

function createCustomer(): Customer {
    return {
        id: 0,
        name: "",
        email: "",
        address: "",
        phone: ""
    };
}
const product1 = createProduct();
const product2 = createProduct();

const customer1 = createCustomer();
customer1.name = "John Doe";
customer1.email = "john.doe@example.com";
const customer2 = createCustomer();
customer2.name = "Jane Smith";
customer2.email = "jane.smith@example.com";

console.log(product1);
console.log(product2);
console.log(customer1);
console.log(customer2);
 // after finish this question try to make account number insted of account id and generate automatic account number
  //  of 9 digit where 4 digit same bcz of same bank