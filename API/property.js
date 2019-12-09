var express = require("express");
var router = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://maihoangan1999:0902770317@joyce-accsy.mongodb.net/API";

//get
router.get("/", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log("Database created");
    var dbo = db.db("testAPI");
    var query = {};
    dbo
      .collection("propertys")
      .find(query)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
  });
});

//post
router.post("/", (req, res) => {
  var newProperty = {
    PropertyName: "BDS",
    PropertyTypeId: "1231232",
    Description: "BSD IS HIGHT ",
    DistrictID: "123",
    Address: "224/2 PDP",
    Area: "HCM CITY",
    BedRoom: "3",
    BathRoom: "2",
    Price: "100000$",
    InstallmentRate: "5",
    Avatar: "PNG",
    Album: "PNG",
    PropertyStatusID: "123456",
    ServiceID: "123456",
    PropertyID: "123456"
  };
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("testAPI");
    dbo.collection("propertys").insertOne(newProperty, (err, result) => {
      if (err) throw err;
      var kq = false;
      if (result.insertedCount > 0) kq = true;
      console.log(result);
      res.json(kq);
    });
  });
});

//put
router.put("/:id", (req, res) => {
  var id = req.params.id;
  var newProperty = {
    PropertyName: "BDS",
    PropertyTypeId: "1231232",
    Description: "BSD IS HIGHT ",
    DistrictID: "123",
    Address: "224/2 PDP",
    Area: "HCM CITY",
    BedRoom: "3",
    BathRoom: "2",
    Price: "100000$",
    InstallmentRate: "5",
    Avatar: "PNG",
    Album: "PNG",
    PropertyStatusID: "123456",
    ServiceID: "123456",
    PropertyID: "123456"
  };
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("testAPI");
    var ObjectId = require("mongodb").ObjectID;
    var query = { _id: ObjectId(id) };
    var newValues = {
      $set: {
        PropertyName: newProperty.PropertyName,
        PropertyTypeId: newProperty.PropertyID,
        Description: newProperty.Description,
        DistrictID: newProperty.DistrictID,
        Address: newProperty.Address,
        Area: newProperty.Area,
        BedRoom: newProperty.BedRoom,
        BathRoom: newProperty.BathRoom,
        Price: newProperty.Price,
        InstallmentRate: newProperty.InstallmentRate,
        Avatar: newProperty.Avatar,
        Album: newProperty.Album,
        PropertyStatusID: newProperty.PropertyStatusID,
        ServiceID: newProperty.ServiceID,
        PropertyID: newProperty.PropertyID
      }
    };
    dbo.collection("propertys").updateOne(query, newValues, (err, result) => {
      if (err) throw err;
      var kq = false;
      if (result.result.nModified > 0) kq = true;
      console.log(kq);
      res.json(kq);
    });
  });
});
//delete
router.delete("/:id", (req, res) => {
  var id = req.params.id;
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("testAPI");
    var ObjectId = require("mongodb").ObjectID;
    var query = { _id: ObjectId(id) };
    dbo.collection("propertys").deleteOne(query, (err, result) => {
      if (err) throw err;
      var kq = false;
      if (result.result.n > 0) kq = true;
      console.log(kq);
      res.json(kq);
    });
  });
});

//export
module.exports = router; // export this router to use in index.js
