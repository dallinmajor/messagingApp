const router = require('express').Router();
const APIroutes = require('./API');

router.use('/api', APIroutes);

router.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

module.exports = router;