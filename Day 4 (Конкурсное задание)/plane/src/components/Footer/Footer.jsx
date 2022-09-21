import React from 'react'
import Link from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div>
                    <img src="" alt="Logo" />
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Lorem ipsum</Link></li>
                    </ul>
                </div>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer