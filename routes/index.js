const router = require('express').Router();
const APIroutes = require('./API');
const path = require('path');

router.use('/api', APIroutes);

router.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = router;