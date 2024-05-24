import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

const salt=  +process.env.SALT;
const secretKey = process.env.SECRETKEY;

export const createUser =  async (req, res)  => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: 'Validation errors', errors: errors.array() });
        }


        const { name, email, password } = req.body;
        const passwordHash =  await bcrypt.hash(password, salt);

        const newUser = new User({
            name, email, password: passwordHash
        })

        const user = await newUser.save();

        res.status(201).json({ status: 201, message: 'Usuario Registrado', data: { id: user._id}});

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: error });
    }
}

export const login = async ( req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: 400, message: 'Validation errors', errors: errors.array() });
    }

    const {email, password } = req.body;

    const user = await User.findOne({email});
    if( !user){
        res.status(200).json({message: 'Usuario invalido', data: {} });
    }
    const pass = await bcrypt.compare( password, user.password);
    if( !pass){
        res.status(200).json({message: 'Contraseña invalida', data: {} });
    }

    const token = jwt.sign( {id: user._id, email: user.email}, secretKey, {expiresIn: '1h'});
    res.status(200).json({message: 'Credenciales correctas', data: { jwt: token}});
}
