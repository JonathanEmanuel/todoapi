import { body } from 'express-validator';

export const validateCreateUser = [
    body('name').notEmpty().withMessage('El nombre es Obligatorio'),
    body('email').isEmail().withMessage('Email invalido'),
    body('password').isLength({ min: 6 }).withMessage('Contraseña de longitud incorrecta')
];

export const validateLogin = [
    body('email').isEmail().withMessage('Email invalido'),
    body('password').isLength({ min: 6 }).withMessage('Contraseña de longitud incorrecta')
];
