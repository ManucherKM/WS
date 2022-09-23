import React from 'react'

const Button = (props) => {

    const clickBtn = (e) => {
        e.preventDefault()
        props.click()
    }

    return (
        <button onClick={clickBtn} type={props.Type} className={`rounded py-2 px-4 bg-yellow-300 hover:bg-yellow-800 hover:text-white font-medium sm:w-full ${props.dopStyles}`}>{props.textButton}</button>
    )
}

export default Button