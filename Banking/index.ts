// Level 18 — Bank Account System

// Implement an in-memory Bank Account System.

// Requirements

// Customers

// id
// name

// Accounts

// id
// customer
// balance
// account type: SAVINGS | CURRENT

// Transactions

// id
// account
// type: DEPOSIT | WITHDRAW
// amount
// timestamp

// Operations

// Add customer
// Create account
// Deposit money
// Withdraw money
// Get balance
// Get transaction history
// Transfer money between accounts


// Rules
// Customer ID must be unique.
// Account ID must be unique.
// Account balance cannot become negative.
// Deposit amount must be positive.
// Withdrawal amount must be positive.
// Transfer amount must be positive.
// Source and destination accounts must exist.
// Transfer must not happen if the source account has insufficient balance.
// Invalid operations should be handled safely.

// Your task: Decide the classes, relationships, data structures, methods, validation, and implementation yourself.


import account from "./account";
import customer from "./customer";
import BankingSystem from "./system";

const system=new BankingSystem;

system.addCustomer(new customer("c1","abhinav"));

system.addAccount(new account("a1","SAVINGS",600,"c1"));
console.log(system.getCustomer());
console.log(system.getAccount());
