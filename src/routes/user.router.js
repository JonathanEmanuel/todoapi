import express from "express";
import { createUser, login }  from '../controllers/user.controller.js'
import  { validateCreateUser, validateLogin }  from "../middlewares/validationMiddleware.js";



const router = express.Router();
router.use( express.json());

router.post('/', validateCreateUser, createUser );
router.post('/login', validateLogin, login);
/* 

router.get('/', getUsers);

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('GET Users ', id)
    res.status(200).json( { msg: 'GET USERS ' + id})
})


router.post('/login', login);


router.delete('/:id', (req, res) => {
    console.log('DELETE Users')
    res.status(200).json( { msg: 'DELETE USERS'})
})
 */
export default router;