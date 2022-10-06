import FlightModel from "../model/FlightModel.js";
import UserModel from "../model/UserModel.js";
import { validationResult } from "express-validator";

export async function addFlight(req, res) {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Не удалось добавить полет"
            });
        };

        const doc = new FlightModel({
            nameTrip: req.body.nameTrip,
            date: req.body.date,
            dauration: req.body.dauration,
            price: req.body.price,
            where: req.body.where,
            why: req.body.why,
            flightNumber: req.body.flightNumber,
            urlImg: req.body.urlImg,
            massPlace: req.body.massPlace
        })

        const flight = await doc.save();

        res.status(200).json({
            message: "Полет добавлен в БД",
            flight: flight
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось добавить полет в БД"
        })
    }
}

export async function reservation(req, res) {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Не удалось забронировать полет"
            });
        };

        const numPlace = req.body.chosenPlace;

        if (numPlace <= 0 || numPlace > 80) {
            return res.status(400).json({
                message: "Не удалось забронировать полет"
            });
        }

        const flightId = req.body.flightId;

        const flight = await FlightModel.findById({ _id: flightId });

        if (flight.massPlace[numPlace - 1].occupied) {
            return res.status(400).json({
                message: "Данное место занято"
            });
        }

        flight.massPlace[numPlace - 1].occupied = true;

        await FlightModel.updateOne(
            {
                _id: flightId
            },
            {
                massPlace: [...flight.massPlace]
            }
        )

        const newFlight = await FlightModel.findById({ _id: flightId })

        const userId = req.body.userId

        const user = await UserModel.findById({ _id: userId });

        const { massPlace, ...otherInfoUser } = flight._doc;

        otherInfoUser.numberPlace = numPlace;

        user.flying = [...user.flying, otherInfoUser];

        await UserModel.updateOne(
            {
                _id: userId
            },
            {
                flying: user.flying
            }
        )

        res.status(200).json({
            message: "Полет забронирован",
            user: user,
            newPlane: newFlight
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось забронировать полет"
        })
    }
}

export async function getFlight(req, res) {
    try {
        const flightId = req.params.id;

        const flight = await FlightModel.findById({ _id: flightId })

        res.status(200).json({
            message: "Полет успешно отправлен",
            flight: flight
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось отправить полет"
        })
    }
}

export async function getFlights(req, res) {
    try {

        const flights = await FlightModel.find()

        res.status(200).json({
            message: "Список полетов успешно отправлен",
            flight: flights
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Не удалось отправить список полетов"
        })
    }
}