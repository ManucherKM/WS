import axios from 'axios';
import React, { useState } from 'react'
import Input from "../../../components/Input/Input"
import Button from "../../../components/UI/Button"

const WriteUs = () => {
    const [email, setEmail] = useState("");

    const newEmail = (value) => {
        setEmail(value)
        console.log(email);
    }
    const [textMessage, setTextMessage] = useState("");

    const newTextMessage = (value) => {
        setTextMessage(value)
        console.log(textMessage);
    }

    const btnClick = () => {
        const obj = {
            email: email,
            message: textMessage
        }

        axios.post("URL", obj)

        console.log(obj);
    }

    return (
        <div className="container mt-24">
            <h2 className='text-3xl font-medium text-center mb-12'>Написать нам</h2>
            <div className='shadow-2xl rounded-xl'>
                <div className='flex justify-between'>
                    <div className="p-8 flex flex-col justify-center">
                        <div className='w-5/6'>
                            <p className='mb-10'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ea quo, modi debitis enim eligendi architecto sapiente odit inventore nemo?
                            </p>
                            <form className='w-4/5' action="">
                                <Input dopStyles={"rounded-md mb-5"} bgText={"email"} Required={true} getVal={newEmail} />
                                <Input dopStyles={"rounded-md mb-5"} bgText={"Сообщение"} Required={true} getVal={newTextMessage} />
                                <Button click={btnClick} textButton={"Отправить"} Type={"submit"} />
                            </form>
                        </div>
                    </div>
                    <div className=''>
                        <img className='ml-auto rounded-xl rounded-l-none object-cover w-full' src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteUs