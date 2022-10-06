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

export const addFlightValidation = [
    body("nameTrip", "Некорректное название полета").isString(),
    body("dauration", "Некорректная длительность полета").toFloat(),
    body("price", "Некорректная цена полета").toFloat(),
    body("where", "Неккоректно указанна начальная точка").isString(),
    body("why", "Некорректно указанна конечная точка").isString(),
    body("urlImg", "Некорректный url изображения").optional().isString(),
    body("date", "Некорректная дата").isString(),
    body("flightNumber", "Некорректный номер рейса").isString(),
    body("massPlace", "Некорректно указанны занятые места").isArray(),
]

export const reservFlightValidation = [
    body("chosenPlace", "Некорректный номер места в самолете").toInt().isLength({max: 3}),
    body("flightId", "Некорректный id полета").isString(),
    body("userId", "Некорректный id пользователя").isString()
]