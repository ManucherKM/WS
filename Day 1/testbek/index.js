import express from "express";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Какой-то текст"
    })
})

app.post("/register", (req, res) => {
    console.log(req.body);
    if (!isEmpty(req.body)) {
        res.status(400).json({
            message: "Некорректный логин или пароль"
        })
    }
    console.log(req.body);

    res.status(200).json({
        message: "Пост запрос"
    })
})

app.listen(PORT, (err) => {
    if (err) {
        return console.log("Сервер не запустился", err);
    }
    console.log(`Сервер запустился на ${PORT} порту`);
})