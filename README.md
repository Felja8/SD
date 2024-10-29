# SD# 📱 Cash Guard App

##  Team Members
- **Felix Dimbel**
- **Daria Senyaninova**
- **Leonid Boguslavskii**

---

##  Project Description
Our app is designed for groups of friends traveling together. It helps manage and share expenses easily, ensuring that no one has to worry about splitting bills manually. Users can upload receipts and choose who among their travel companions will split the cost. The app then calculates and tracks the shared expenses, ensuring that everyone pays their fair share. Whether it's for meals, tickets, or accommodations, this tool simplifies group travel expenses so travelers can focus on the fun, not the finances.

---

## Key Features
Splitting Bills Between Users:

Users can create requests for new expenses, specifying a list of participants and individual amounts for each. The app processes these requests and stores the information in a database.

Tracking Individual Expenses:

Each expense can be split unevenly, allowing users to specify how much each participant should contribute. Supports complex bill-splitting scenarios, including partial payments.

Expense and Debt History:

The app maintains a complete history of all expenses and payments. Users can view their past expenses and payments.

Calculating Current Debts:

The service allows users to calculate how much they owe each other based on the entire expense history. Debts update automatically with new expenses.

Simplifying Mutual Debts:

The system automatically simplifies mutual debts between users, reducing the number of transactions. For example, if User A owes User B 100 and User B owes A 50, the system will simplify the debt so that A owes B 50.

Basic Authorization and Security:

Uses Spring Security for basic user authorization. Secures API access and data, limiting access to authorized users only.

RESTful API:

The app provides a REST API for interaction with client applications. Endpoints include adding expenses, retrieving debt information, and managing users.

Integration with PostgreSQL Database:

Uses JPA for database interaction. Stores data on users, expenses, and debts in PostgreSQL.

Scalable Architecture:

Built on Spring Boot, making it easy to scale and extend the application. Organized into layers (controllers, services, repositories) for better code management.

Data Handling and Validation:

Validates incoming data in controllers and services. Handles errors and exceptions to provide informative responses to the client.

API Documentation:

Supports integration with Swagger or Spring REST Docs for automatic API documentation generation.

Support for Group Activities:

Accounts for expenses related to group visits or events. Convenient user group management for bill splitting.

Personal Statistics and Reports:

Users can access statistics on their expenses and debts. Generates reports for specific time periods.

Ease of Use:

Intuitive API for integration with client applications (web, mobile). Detailed documentation and usage examples.

Data Security:

Encrypts user passwords using BCrypt. Adheres to best security practices in application development.

Extensibility of Features:

Supports adding new features like notifications, debt reminders, integration with payment systems, etc. Flexible for customization and adaptation to specific business needs.

The app is designed for convenient and transparent management of shared expenses, simplifying the bill-splitting process and tracking debts among users.

---

##  Potential Tech Stack
- **Frontend**: React Native
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: Firebase
- **APIs**: REST or GraphQL

---

##  Main Milestones

**1. Project Initialization and Planning**  
Define the scope, technology stack, and team responsibilities. Set up the project repository and establish a basic structure.

**2. Backend and Database Setup**  
Build core functionalities for expense sharing and receipt management. Integrate the database for storing expenses and user data.

**3. Frontend Development**  
Design the user interface, ensuring a smooth user experience for uploading receipts, selecting friends, and viewing expense summaries.

**4. Integration and Testing**  
Connect frontend to backend services. Perform unit and integration tests to ensure smooth operation across the app.

**5. Final Touches and Deployment**  
Complete final testing and debugging. Deploy the app to production, ensuring scalability and readiness for user interaction.

---

# Trello 
https://trello.com/invite/b/670557ba04f4920e2e959d36/ATTI5bdfe34b25fc3d5698d8f7d5668fd0ed48953865/sd1
