const router = require('express').Router();
const UserController = require('../../controllers/userControllers');

router.route('/')
    .post(UserController.create)

router.route('/all')
    .get(UserController.findAll)

router.route('/:id')
    .get(UserController.findById)

module.exports = router;