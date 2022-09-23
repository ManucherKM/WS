import React, { useState } from 'react'

const Input = (props) => {
    const [newVal, setNewVal] = useState("")

    const upVal = (e) => {
        setNewVal(e.target.value)
        props.getVal(e.target.value)
    }

    return (
        <input required={props.Required} placeholder={props.bgText} className={`outline-none w-full py-2 px-4 ${props.dopStyles}`} value={newVal} onChange={upVal} type="text" />
    )
}

export default Input