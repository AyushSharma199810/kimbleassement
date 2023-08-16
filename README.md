# kimbleassement

This project is a RESTful API built with Node.js, TypeScript, and Express. The API provides endpoints to manage transactions, retrieve balances, and check transaction history for Ethereum addresses.

## Folder Structure

project-root/
|-- src/
| |-- controllers/
| | |-- transactionController.ts
| |-- routes/
| | |-- transactionRoutes.ts
| |-- models/
| | |-- TransactionModel.ts
| |-- services/
| | |-- transactionService.ts
|-- app.ts
|-- package.json
|-- tsconfig.json
|-- README.md



## Features

- **Add Transaction**: The API exposes an endpoint that allows users to make transactions from one address to another.

- **Get Balance**: The API provides an endpoint to retrieve the balance of a specific address.

- **Check Transaction History**: The API offers an endpoint to view the transaction history associated with an address.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.

### Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/project-repo.git
Install dependencies:
bash
Copy code
cd project-repo
npm install
Usage
Start the server:
bash
Copy code
npm start
Access the API using endpoints:
Add Transaction: POST /api/transaction
Get Balance: GET /api/balance/:address
Check Transaction History: GET /api/history/:address
Examples
Add Transaction:

http://
POST /api/transaction
Content-Type: application/json

{
  "from": "0xSenderAddress",
  "to": "0xRecipientAddress",
  "amount": 1000000000000000000
}
Get Balance:

http://
GET /api/balance/0xUserAddress
Check Transaction History:

http://
GET /api/history/0xUserAddress
Contributing
Contributions are welcome! If you'd like to contribute, please follow the guidelines in CONTRIBUTING.md.

License
This project is licensed under the MIT License.

Contact
For questions or suggestions, feel free to reach out to:

Email: ayushsharma199810@gmail.com
GitHub: ayushsharma199810
