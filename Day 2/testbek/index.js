import express from "express";
import fs from "fs"
import path from "path"
import mongoose from "mongoose"
import UserSchema from "./models/UserModel.js"


mongoose
    .connect("mongodb+srv://admin:admin123@cluster0.1xn69mi.mongodb.net/user?retryWrites=true&w=majority")
    .then(() => { console.log("База данный подключена"); })
    .catch((e) => { console.log("Ошибка БД", e); })

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

app.get("/lk", (req, res) => {
    res.status(200).json({
        message: "Какой-то текст"
    })
})

app.post("/register", async (req, res) => {
    try {
        console.log(req.body);

        if (req.body.password === '' || req.body.email === '') {
            return res.status(400).json({
                message: "Некорректный логин или пароль"
            })
        }

        // fs.appendFileSync(path.join("bd", "user.txt"), `\r\n${req.body.email} ${req.body.password}`, (err) => {
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).json({
        //             message: "Не удалось добавить пользоватлея"
        //         })
        //     }
        // })

        const doc = new UserSchema({
            email: req.body.email,
            password: req.body.password
        })

        const user = await doc.save()

        res.status(200).json({
            message: "Успешная регистрация"
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось зарегестрироваться"
        })
    }
})

app.listen(PORT, (err) => {
    if (err) {
        return console.log("Сервер не запустился", err);
    }
    console.log(`Сервер запустился на ${PORT} порту`);
})