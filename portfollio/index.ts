// 4. Stock Trading & Portfolio Management

// Concepts: OOP, maps, transactions, financial calculations, input validation.





// Build a stock trading system where users can buy and sell shares while maintaining a portfolio and transaction history.

// Requirements
// 1. Create a Stock model with symbol, name, and price.
// 2. Create a Portfolio or TradingSystem class that maintains cash balance, holdings, and transactions.
// 3. buyStock(symbol, quantity): boolean — purchase shares if the user has sufficient funds.
// 4. sellStock(symbol, quantity): boolean — sell only shares the user owns.
// 5. getPortfolio(): PortfolioSummary — return holdings, quantities, average purchase prices, and current market values.
// 6. getCashBalance(): number — return the remaining cash.
// 7. getTransactionHistory(): Transaction[] — return all completed purchases and sales.
// 8. getProfitLoss(): number — calculate realized and unrealized profit or loss.
// 9. Reject invalid quantities, unknown symbols, and insufficient funds or holdings.
// 10. Ensure a failed transaction does not partially modify the portfolio.
// Example
// Initial cash: ₹10,000
// Stock ABC price: ₹100

// buyStock("ABC", 20)
// → true
// Cash balance: ₹8,000
// ABC holdings: 20 shares

// sellStock("ABC", 5)
// → true
// Cash balance: ₹8,500
// ABC holdings: 15 shares


// Assume stock prices are supplied by your system; you do not need a live market API. Use integer paise or a consistent decimal strategy to avoid floating-point currency errors.
