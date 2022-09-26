import React, { useState } from 'react'
import Input from "../../components/Input/Input"
import Button from "../../components/UI/Button"
import * as validation from "../../components/Validation/Validation.js"
import axios from 'axios'


const Register = () => {

    const [valEmail, setValEmail] = useState("")
    const newValEmail = (value) => {
        setValEmail(value)
    }

    const [valPassword, setValPassword] = useState("")
    const newValPassword = (value) => {
        setValPassword(value)
    }

    const [valNikname, setValNikname] = useState("")
    const newValNikname = (value) => {
        setValNikname(value)
    }

    const [valDate, setValDate] = useState("")
    const newValDate = (value) => {
        setValDate(value)
    }

    const sendForm = () => {
        validation.email(valEmail)

        const obj = {
            email: valEmail,
            password: valPassword,
            nikname: valNikname,
            date: valDate
        };

        // console.log(obj);

        // axios.post("URL", obj)
    }

    return (
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-[70vh]">
            <form className="w-2/4 mx-auto mt-20 md:mt-10 sm:w-3/4 lg:mt-0" action="">
                <h2 className="text-3xl text-center mb-8">Регистрация</h2>
                <div>
                    <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Email"} getVal={newValEmail} />
                    <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Пароль"} getVal={newValPassword} />
                    <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Никнейм"} getVal={newValNikname} />
                    <Input Required={true} dopStyles={"mb-8 border rounded"} bgText={"Дата рождения"} getVal={newValDate} />
                    <Button Type={'submit'} dopStyles={"lg:w-full"} textButton={"Отправить"} click={sendForm} />
                </div>
            </form>
        </div>
    )
}

export default Register