const express=require('express');
const userController = require('../controller/signupController');
const authController = require('../controller/authController');
const bookController = require('../controller/bookController');

const router=express.Router();

router.post('/signup', userController.register);
router.post('/login', authController.login);


router.get('/', bookController.getAllBooks);
router.get('/:author', bookController.getBookByAuthor);
router.post('/create', bookController.createBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:deleteid', bookController.deleteBook);


 module.exports=router;