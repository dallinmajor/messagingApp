const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');

const PORT = process.env.PORT || 5000;
  
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/mern_starter",
    { useNewUrlParser: true }
  );

  const app = express();

  app.use(bodyParser.json({ useNewUrlParser: true }));
  app.use(router);

  // app.use(express.static(path.resolve(__dirname, '../client/build')));

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });

