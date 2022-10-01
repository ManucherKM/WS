import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Input from "../../components/Input/Input"
import Button from "../../components/UI/Button"
import { email, password } from "../../components/Validation/Validation.js"

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [valEmail, setValEmail] = useState("")
  const [еmailError, setEmailError] = useState(false);
  const newValEmail = (value) => {
    setValEmail(value)
  }

  const [valPassword, setValPassword] = useState("")
  const [passwordError, setPasswordError] = useState(false);
  const newValPassword = (value) => {
    setValPassword(value)
  }

  const sendForm = () => {
    const isEmail = email(valEmail);
    const isPassword = password(valPassword);

    if (!isEmail || !isPassword) {
      if (!isEmail) {
        setEmailError(true)
      } else {
        setEmailError(false)
      }
      if (!isPassword) {
        setPasswordError(true)
      } else {
        setPasswordError(false)
      }
      return
    }

    const obj = {
      email: valEmail,
      password: valPassword,
    };

    // axios.post("URL", obj)
    // dispatch({ type: "auth" })
    navigate("/");
  }

  return (
    <>
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-[60vh]">
        <form className="w-2/4 mx-auto mt-20 md:mt-10 sm:w-3/4" action="">
          <h2 className="text-3xl text-center mb-8">Авторизация</h2>
          <div>
            {еmailError && <p className="text-base text-red-600 mb-2">Некорректный email</p>}
            <Input Required={true} dopStyles={"mb-3 border rounded"} bgText={"Email"} className="" getVal={newValEmail} />
            {passwordError && <p className="text-base text-red-600 mb-2">Пароль слишком короткий</p>}
            <Input Required={true} dopStyles={"mb-8 border rounded"} bgText={"Пароль"} className="" getVal={newValPassword} />
            <Button Type={'submit'} dopStyles={"lg:w-full"} textButton={"Отправить"} click={sendForm} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Login