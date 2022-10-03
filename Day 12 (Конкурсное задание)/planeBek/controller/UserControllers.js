import UserModel from "../model/UserModel.js"
import bcrypt from "bcrypt"
import { validationResult } from "express-validator";

export async function login(req, res) {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Не удалось авторизоваться"
            });
        };

        const email = req.body.email;

        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return res.status(500).json({
                message: "Не удалось авторизоваться"
            });
        };

        const password = req.body.password;

        const isValidPassword = await bcrypt.compare(password, user.passwordHash);

        if (!isValidPassword) {
            return res.status(500).json({
                message: "Не удалось авторизоваться"
            })
        }

        res.status(200).json({
            message: "Успешная авторизация",
            user: user
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось авторизоваться"
        })
    }
}

export async function register(req, res) {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Не удалось зарегестрироваться",
                errors: errors
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const doc = new UserModel({
            email: req.body.email,
            name: req.body.nikname,
            age: req.body.age,
            passwordHash: hash,
            flying: []
        })

        const user = await doc.save();

        res.status(200).json({
            message: "Успешная регистрация",
            user: user
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось зарегестрироваться"
        })
    }
}

export async function profile(req, res) {
    try {
        const userId = req.params.id

        const user = await UserModel.findById({ _id: userId })

        res.status(200).json({
            message: "Пользователь найден",
            user: user
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Пользователь не найден"
        })
    }
}

export function home(req, res) {
    try {
        res.status(200).json({
            message: "Главная страница"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось загрузить главную страницу"
        })
    }
}