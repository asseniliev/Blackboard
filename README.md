# Blackboard

Blackboard is a prototype of a backend communicating with a Mongo DB. It implements functions for the basic CRUD operations.
An exercise executed during the fullstack web development bootcamp in La Capsule (Lyon, 2023). 

Result of the terminal execution :

![Terminal](/Terminal.jpg)

Functionality available:
1. Connect to Mondo DB called "Blackboard"
2. Schemes and models for three collections: articles, orders, users
3. dotenv module used to maintain connection string variable
4. Functions to manipulate the database collections :<br />
    a. To display all articles<br />
    b. Display an article by name<br />
    c. Display an article by id<br />
    d. Update article's price<br />
    e. Update article's stock<br />
    f. Reset all articles stock to zero<br />
    g. Display list of all users<br />
    h. Delete a user by id<br />
    i. Display all orders<br />
    j. Update an order payment status<br />
    k. Delete an order<br />
    l. Display the articles per order id<br />
    m. Display all orders for a user<br />
5. Visual stock availability per article with the help of 'Ervy' module

Skills trained and exercised:
1. Connect to Mongo DB using environment variables
2. Create database schemas and use them in models
3. Implement functions following specified requirements
4. Use CRUD operations to manipulate documents in Mongo collections
5. Upload data in MongoDB using json files
6. Visualize data in the terminal using Ervy module
