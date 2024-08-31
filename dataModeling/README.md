# DataModeling
Mongoose

--- 
- MongoDB server => DataBase software.
- Mongoose => command line tool to intract MongoDB (Prisma is for pgSQL).
- MongoDB Compass => GUI tool to intract MongoDB.
- MongoDB Atlas cloud based mongoDB service
---

- We will learn only data modeling here not how to setup mongoDB connection.
- Which DB(pgSQL, Mongo) should be used depends on What we have to store(username,password, text, photo etc)
- TOOLS for data modeling - MoonModeler, eraser.io
- DB is  based on schema, model is abstract concept.
---

- `npm i mongoose`
- create model folder and structures your model files accordingly
1. import mongoose, 
2. create a schema, schema is a function[takes 1 thing=> schema props as object, & timestamps(optional) => timestamps-[createdAt, updatedAt]]. (Mongoose gives out of the box mongoDB validation feature)
3. export model[Model takes 2 things- 1=>model name, 2=> schemaName(model will be based on this schema)] based on that schema.
- Some data validation checks for shema props- required, unique, lower/uupercase,min,max
- mongoose gives you timestamps 

### ODM/ORM (Same ODM for noSQL & ORM for SQL)
Object document mapper (ODM/ORM) => Data mapper, used to interact with data as object.

#### Where to store images? 
We can store buffer data(pdf, jpg etc) inside mongo but this is not a good practice, we store this type of data on our own server in a different folder and share it public url on db. If we have different copies of same image we can create an array of string(url).