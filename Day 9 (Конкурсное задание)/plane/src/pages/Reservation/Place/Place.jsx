import React from 'react'

const Place = (props) => {
    const styleWrapper = props.occupied ? `bg-red-400 w-[4%] py-2 flex justify-center cursor-default ${props.dopStyles}` : `bg-green-400 hover:bg-green-600 w-[4%]  py-2 flex justify-center cursor-pointer ${props.dopStyles}`;

    const click = () => {
        if (!props.occupied) {
            props.click(props.text)
        }
    }

    return (
        <div onClick={click} className={styleWrapper}>
            <p>{props.text}</p>
        </div>
    )
}

export default Place