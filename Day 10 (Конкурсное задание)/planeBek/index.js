import express from "express";
import mongoose from "mongoose";
import * as UserController from "./controller/UserControllers.js"
import { registerValidation, loginValidation } from "./validator/validator.js"

mongoose.connect("mongodb+srv://admin:admin123@cluster0.1xn69mi.mongodb.net/flying?retryWrites=true&w=majority")
    .then(() => console.log("БД подключена"))
    .catch((e) => console.log("Ошибка подключения БД\n\n", e))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", UserController.home);
app.post("/login", loginValidation, UserController.login);
app.post("/register", registerValidation, UserController.register);

app.post("/admin/addflight", registerValidation, UserController.register);

app.listen(PORT, (e) => {
    if (e) {
        console.log("Сервер не запустился\n\n", e);
        return
    };
    console.log(`Сервер запустился на ${PORT} порту`);
})