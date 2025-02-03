## #Instructions on How to Set Up and Run the Backend Locally

##### - step 1 : clone this repo.
##### - step 2 : cd [directory]
##### - step 3 : [to install modul..] npm i 
##### - step 4 : create a .env file. [and add - PORT=3001,MONGO_URI=[your-mongo-uri],JWT_SECRET=[your-jwt-secret]]
##### - step 5 : [to run] node server.js

#### #backend(hosted) : [vercel - wait.](wait....)

## #Here are the steps I followed. - 

##### - Start by creating a new Node.js project.
##### - Create necessary folders like `models`, `routes`, and `middleware` for better code organization.
##### - Build models for user authentication (using JWT) and events.
##### - Use Mongoose for database validation and Joi for frontend validation.
##### - Develop functions for creating, reading, updating, and deleting data.
##### - Implement middleware to protect your data by authenticating users.