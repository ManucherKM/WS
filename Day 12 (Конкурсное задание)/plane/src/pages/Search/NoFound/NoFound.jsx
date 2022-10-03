import React from 'react'
import no from "../../../assets/img/no.svg"

const NoFound = () => {
    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center h-[50vh]">
                <img className="sm:w-24" src={no} alt="img" />
                <h1 className="text-[#b8b8b8]">Ничего не найдено</h1>
            </div>
        </div>
    )
}

export default NoFound