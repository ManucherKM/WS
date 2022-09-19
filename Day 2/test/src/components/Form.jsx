import axios from "axios";
import { useState } from "react";

function Form() {
    const [password, setNum] = useState("");
    const [email, setEmail] = useState("");


    const sendForm = async (e) => {

        e.preventDefault();

        const obj = {
            password: password,
            email: email
        }

        axios.post("/register", obj);
    }

    return (
        <form action="" className="">
            <div className="flex flex-col w-2/4 mx-auto">
                <input value={password} onChange={e => setNum(e.target.value)} className="border h-12 outline-none rounded-lg px-2" type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} className="border mt-3 h-12 outline-none rounded-lg px-2" type="text" />
                <button type="submit" onClick={sendForm} className="bg-yellow-400 h-12 rounded-lg mt-3">Отправить</button>
            </div>
        </form>
    )
}

export default Form;