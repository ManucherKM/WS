import axios from 'axios';
import React, { useState } from 'react'
import Input from "../../../components/Input/Input"
import Button from "../../../components/UI/Button"

const WriteUs = () => {
    const [email, setEmail] = useState("");

    const newEmail = (value) => {
        setEmail(value)
    }
    const [textMessage, setTextMessage] = useState("");

    const newTextMessage = (value) => {
        setTextMessage(value)
    }

    const btnClick = () => {
        const obj = {
            email: email,
            message: textMessage
        }

        // axios.post("URL", obj)

        console.log(obj);
    }

    return (
        <div className="container mt-24">
            <h2 className='text-3xl font-medium text-center mb-12'>Написать нам</h2>
            <div className='shadow-2xl rounded-xl lg:w-3/5 lg:mx-auto md:w-4/5 sm:w-full'>
                <div className='flex justify-between'>
                    <div className="p-8 flex flex-col justify-center lg:py-10">
                        <div className='w-5/6 lg:mx-auto lg:flex lg:flex-col lg:items-center lg:w-full'>
                            <p className='text-xl font-medium mb-5'>Заполните форму</p>

                            <p className='mb-10 lg:text-justify w-4/5 lg:w-full'>
                                Если вы хотите получить консультацию, сообщить о проблеме и по другим вопросам отправьте нам данную форму с описанием вашей проблемы
                            </p>
                            <form className='w-4/5 lg:flex lg:flex-col lg:w-full' action="">
                                <Input dopStyles={"rounded-md mb-5 border"} bgText={"Ваша почта"} Required={true} getVal={newEmail} />
                                <Input dopStyles={"rounded-md mb-5 border"} bgText={"Сообщение"} Required={true} getVal={newTextMessage} />
                                <Button dopStyles={""} click={btnClick} textButton={"Отправить"} Type={"submit"} />
                            </form>
                        </div>
                    </div>
                    <div className='relative lg:hidden'>
                        <img className='rounded-xl rounded-l-none object-cover h-full' src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteUs