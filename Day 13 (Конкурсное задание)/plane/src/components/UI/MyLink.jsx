import React from 'react'
import { Link } from "react-router-dom"

const MyLink = (props) => {

    const clickLink = () => { }

    return (
        <>
            <Link to={props.pathUrl} onClick={clickLink} className={"rounded py-2 px-4 bg-yellow-300 hover:bg-yellow-800 hover:text-white font-medium sm:w-full "}>{props.textLink}</Link>
        </>
    )
}

export default MyLink