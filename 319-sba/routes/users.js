const { Router } = require('express');
const usersCtrl = require('../controllers/users');

const router = Router();

// GET request for  all users
router.get('/', usersCtrl.getAllUsers);

// GET a user by ID
router.get('/:id', usersCtrl.getUserById);

// PATCH route to update a user by ID
router.patch('/:id', usersCtrl.updateUser);

// DELETE route to delete a user by ID
router.delete('/:id', usersCtrl.deleteUser);

//added all routes per requirements

module.exports = router;