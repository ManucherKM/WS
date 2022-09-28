import { body } from "express-validator";

export const registerValidation = [
    body("email", "Некорректный email").isEmail(),
    body("password", "Некорректный пароль").isLength({ min: 10, max: 50 }).isString(),
    body("age", "Некорректный возраст").toInt(),
    body("nikname", "Некорректный никнейм").isLength({ max: 15 }).isString(),
];

export const loginValidation = [
    body("email", "Некорректный email").isEmail(),
    body("password", "Некорректный пароль").isString(),
];