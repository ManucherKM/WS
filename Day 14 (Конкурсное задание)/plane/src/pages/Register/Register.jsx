import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import * as validation from "../../components/Validation/Validation.js";
import axios from "../../axios"
import Input from "../../components/Input/Input";
import Button from "../../components/UI/Button";
import Loading from "../../components/UI/Loading"

const Register = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false)

    const [valEmail, setValEmail] = useState("");
    const [еmailError, setEmailError] = useState(false)
    const newValEmail = (value) => {
        setValEmail(value)
    }

    const [valPassword, setValPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const newValPassword = (value) => {
        setValPassword(value)
    }

    const [valNikname, setValNikname] = useState("");
    const [niknameError, setNiknameError] = useState(false);
    const newValNikname = (value) => {
        setValNikname(value)
    }

    const [age, setAge] = useState("");
    const [ageError, setAgeError] = useState(false);
    const newAge = (value) => {
        setAge(value)
    }

    const sendForm = async () => {

        setIsLoading(true)
        const isEmail = validation.email(valEmail);
        const isPass = validation.password(valPassword);
        const isNik = validation.nikname(valNikname);
        const isAge = validation.age(age);

        if (!isEmail || !isPass || !isNik || !isAge) {
            if (!isEmail) {
                setEmailError(true)
                setIsLoading(false)
            } else {
                setEmailError(false)
                setIsLoading(false)
            }
            if (!isPass) {
                setPasswordError(true)
                setIsLoading(false)
            } else {
                setPasswordError(false)
                setIsLoading(false)
            }
            if (!isNik) {
                setNiknameError(true)
                setIsLoading(false)
            } else {
                setNiknameError(false)
                setIsLoading(false)
            }
            if (!isAge) {
                setAgeError(true)
                setIsLoading(false)
            } else {
                setAgeError(false)
                setIsLoading(false)
            }
            return
        }

        setEmailError(false)
        setPasswordError(false)
        setNiknameError(false)
        setAgeError(false)

        const obj = {
            email: valEmail,
            password: valPassword,
            nikname: valNikname,
            age: Number(age),
            flying: []
        };

        try {

            const user = await axios.post("/register", obj);

            dispatch({ type: "auth", newUser: user.data.user });

            setIsLoading(false)

            navigate("/")
        } catch (e) {
            console.log(e);
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-[70vh]">
                {isLoading &&
                    <div className='w-full h-[70vh] flex flex-col items-center justify-center loader-wrapper'>
                        <Loading />
                    </div>
                }
                {!isLoading && <form className="w-2/4 mx-auto mt-20 md:mt-10 sm:w-3/4 lg:mt-0" action="">
                    <h2 className="text-3xl text-center mb-8">Регистрация</h2>
                    <div>
                        {еmailError && <p className="text-base text-red-600 mb-2">Некорректный email</p>}
                        <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Email"} getVal={newValEmail} />
                        {passwordError && <p className="text-base text-red-600 mb-2">Пароль слишком короткий</p>}
                        <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Пароль"} getVal={newValPassword} />
                        {niknameError && <p className="text-base text-red-600 mb-2">Некорректный никнейм</p>}
                        <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Никнейм"} getVal={newValNikname} />
                        {ageError && <p className="text-base text-red-600 mb-2">Некорректный возраст</p>}
                        <Input Required={true} dopStyles={"mb-8 border rounded"} bgText={"Возраст"} getVal={newAge} />
                        <Button Type={'submit'} dopStyles={"lg:w-full"} textButton={"Отправить"} click={sendForm} />
                    </div>
                </form>}
            </div>
        </>
    )
}

export default Register