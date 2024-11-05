// //last end 
// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);

const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // chose port from here like 8080, 3001

server.use(middlewares);

// Custom route to get pincode details by pincode
server.get('/getpincodedetailBypincode/:pincode', (req, res) => {
  const pincode = req.params.pincode;
  const db = router.db; // Get the lowdb instance
  const pincodeDetails = db.get('pincodes').find({ pincode }).value();
  
  if (pincodeDetails) {
    res.json(pincodeDetails);
  } else {
    res.status(404).json({ message: 'Pincode not found' });
  }
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
