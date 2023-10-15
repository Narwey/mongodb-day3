const express = require("express");
const Product = require("../Models/Product");
const route = express.Router();


route.post("/create", async (req, res) => {
  try {
    await Product.create([
      {
        model: "Samsung",
        Price: 1000,
        quantity: 10,
        properties: "NADI CANADI",
      },
    ]);
    console.log("TAJOUTA");
    res.send('mcha');
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
});

route.get("/delete", async (req, res) => {
    try {
    
        const query = {model: "Samsung",Price: 1000,}
        await Product.deleteOne(query);
      console.log("Tsupprima");
      res.send('mcha 3end lah');
    } catch (e) {
      console.log(e.message);
      res.send(e.message);
    }
  });
// Updating 
route.put('/update/:_id', async(req,res)=> {
    try {
        await Product.updateOne(req.params , {$set: req.body});
        res.send('wa t updetaa a hamid')
    }catch(e){
      console.log(e.message);
      res.send(e.message);
    }
})
// READING from collection
route.get("/delete", async (req, res) => {
    try {
    
        const query = {model: "Samsung"}
        await Product.find(query);
      console.log("hahowa jaa");
      res.send('hahowa ja wa wlaah ta mchaw fiha');
    } catch (e) {
      console.log(e.message);
      res.send(e.message);
    }
  });


module.exports =  route;
