import React, { useState } from 'react'
import Input from "../../components/Input/Input"
import Button from "../../components/UI/Button"

const Login = () => {

  const [valEmail, setValEmail] = useState("")
  const newValEmail = (value) => {
    setValEmail(value)
  }

  const [valPassword, setValPassword] = useState("")
  const newValPassword = (value) => {
    setValPassword(value)
  }

  const sendForm = () => {

    // Validation.email(valEmail)

    const obj = {
      email: valEmail,
      password: valPassword,
    };

    console.log(obj);

    // axios.post("URL", obj)
  }

  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-[60vh]">
      <form className="w-2/4 mx-auto mt-20 md:mt-10 sm:w-3/4" action="">
        <h2 className="text-3xl text-center mb-8">Авторизация</h2>
        <div>
          <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Email"} className="" getVal={newValEmail} />
          <Input Required={true} dopStyles={"mb-8 border rounded"} bgText={"Пароль"} className="" getVal={newValPassword} />
          <Button Type={'submit'} dopStyles={"lg:w-full"} textButton={"Отправить"} click={sendForm} />
        </div>
      </form>
    </div>
  )
}

export default Login