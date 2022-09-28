import FlightModel from "../model/FlightModel";

export function addFlight(req, res) {
    try {

        const doc = new FlightModel({
            nameTrip: "Счастливый билет номер 123",
            date: "01-02-22",
            dauration: 2.5,
            price: 150,
            where: "Россия",
            why: "Италия",
            flightNumber: "A144",
            urlImg: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        })

        const flight = doc.save();

        res.status(200).jso({
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