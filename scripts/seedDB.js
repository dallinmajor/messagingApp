const mongoose = require("mongoose");
const db = require("../models");
const MONGODB_URI = require("../config/keys");

mongoose.connect(
  MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const userSeed = [
  {
    username: 'John Snow',
  },
  {
    username: 'Peter Parker',
  },
  {
    username: 'Sasuke Uchiha',
  },
  {
    username: 'Saitama',
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
