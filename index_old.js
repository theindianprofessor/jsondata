// const jsonServer = require("json-server"); // importing json-server library
// const fs = require("fs");
// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; // chose port from here like 8080, 3001

// // // Function to wrap JSON data in an object 
// // const wrapJsonData = (filePath, key) => { 
// //     const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')); 
// //     const wrappedData = { [key]: data }; 
// //     fs.writeFileSync(filePath, JSON.stringify(wrappedData, null, 2), 'utf-8'); 
// //     console.log(`Wrapped data in ${filePath} with key "${key}"`); 
// // };
// // Function to wrap JSON data in an object 
// const wrapJsonData = (filePath, key) => { 
//     const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')); 
//     return { [key]: data }; 
// };

// const pincodeData = wrapJsonData("pincode.json", "pincodes"); 
// const blogsData = wrapJsonData("blogs.json", "blogs"); 
// const quotesData = wrapJsonData("quotes.json", "quotes"); 

// const pincodeRouter = jsonServer.router(pincodeData); 
// const blogsRouter = jsonServer.router(blogsData); 
// const quotesRouter = jsonServer.router(quotesData);

// server.use(middlewares);

// // Use the routers for different routes
// server.use("/pincode", pincodeRouter);
// server.use("/blogs", blogsRouter);
// server.use("/quotes", quotesRouter);

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
// });



// Function to wrap JSON data in an object
// const wrapJsonData = (filePath, key) => {
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//   console.log(`Wrapping data from ${filePath} with key "${key}"`);
//   console.log(`file  ${key} with Data length: "${data.length}"`);
//   return { [key]: data };
// };


// const jsonServer = require("json-server"); // importing json-server library
// const fs = require("fs");
// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; // chose port from here like 8080, 3001

// // Function to wrap JSON data in an object
// const wrapJsonData = (filePath, key) => {
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//   console.log(`Wrapping data from ${filePath} with key "${key}"`);
//   console.log(`Data length: ${data.length}`);
//   //return { [key]: data };
//   return data;
// };

// // Create routers for each JSON file
// const pincodeData = wrapJsonData("pincode.json", "pincodes");
// const blogsData = wrapJsonData("blogs.json", "blogs");
// const quotesData = wrapJsonData("quotes.json", "quotes");
// const db = wrapJsonData("db.json", "burger");

// // console.log("Pincode Data:", pincodeData);
// // console.log("Blogs Data:", blogsData);
//  console.log("Quotes Data:", quotesData);

// const pincodeRouter = jsonServer.router(pincodeData);
// const blogsRouter = jsonServer.router(blogsData);
// const quotesRouter = jsonServer.router(quotesData);

// server.use(middlewares);

// // Use the routers for different routes
// server.use("/pincode", pincodeRouter);
// server.use("/blogs", blogsRouter);
// server.use("/quotes", quotesRouter);

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
//   console.log(`Available routes:`);
//   console.log(`http://localhost:${port}/pincode`);
//   console.log(`http://localhost:${port}/blogs`);
//   console.log(`http://localhost:${port}/quotes`);
// });


//last start
// const jsonServer = require("json-server"); // importing json-server library
// const fs = require("fs");
// const server = jsonServer.create();
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; // chose port from here like 8080, 3001

// // Function to read JSON data
// const readJsonData = (filePath) => {
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//   return data;
// };

// // Read JSON data
// const pincodeData = readJsonData("pincode.json");
// const blogsData = readJsonData("blogs.json");
// const quotesData = readJsonData("quotes.json");
// const dbData = readJsonData("db.json");

// console.log("Pincode Data Length:", pincodeData.pincodes.length);
// console.log("Blogs Data Length:", blogsData.blogs.length);
// console.log("Quotes Data Length:", quotesData.quotes.length);
// console.log("Quotes Data Length:", dbData.burger.length);

// // Create routers for each JSON file
// const pincodeRouter = jsonServer.router({ pincodes: pincodeData });
// const blogsRouter = jsonServer.router({ blogs: blogsData });
// const quotesRouter = jsonServer.router(quotesData);
// const dbRouter = jsonServer.router(dbData);

// server.use(middlewares);

// // Use the routers for different routes
// server.use("/pincode", pincodeRouter);
// server.use("/blogs", blogsRouter);
// server.use("/quotes", quotesRouter);
// server.use("/db", dbRouter);

// server.listen(port, () => {
//   console.log(`JSON Server is running on port ${port}`);
//   console.log(`Available routes:`);
//   console.log(`http://localhost:${port}/pincode`);
//   console.log(`http://localhost:${port}/blogs`);
//   console.log(`http://localhost:${port}/quotes`);
//   console.log(`http://localhost:${port}/db`);
// });

//last end 
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);
