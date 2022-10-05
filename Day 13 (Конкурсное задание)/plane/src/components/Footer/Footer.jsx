import React from 'react'
import { Link } from "react-router-dom"
import svgLogo from "../../assets/img/logo.svg"
import svgVK from "../../assets/img/VK.svg"
import svgFacebook from "../../assets/img/Facebook.svg"
import svgTelegram from "../../assets/img/Telegram.svg"
import svgTwitter from "../../assets/img/Twitter.svg"


const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className='container py-10 flex justify-between md:flex-col md:items-center'>
                <div className='w-1/4 flex flex-col items-center md:mb-10 '>
                    <img className='w-40 mb-10' src={svgLogo} alt="Logo" />
                    <div className='flex gap-10 items-center'>
                        <a className='dek:w-9' href="https://vk.com" target="_blank">
                            <img src={svgVK} alt="SocialNetwork" />
                        </a>
                        <a className='dek:w-9' href="https://facebook.com" target="_blank">
                            <img src={svgFacebook} alt="SocialNetwork" />
                        </a>
                        <a className='dek:w-9' href="https://web.telegram.org" target="_blank">
                            <img src={svgTelegram} alt="SocialNetwork" />
                        </a>
                        <a className='dek:w-9' href="https://twitter.com/" target="_blank">
                            <img src={svgTwitter} alt="SocialNetwork" />
                        </a>
                    </div>
                </div>
                <div className="w-1/4 dek:hidden" />
                <div className='w-2/4 flex justify-between items-center md:flex-col'>
                    <ul className='md:mb-8'>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                    </ul>
                    <ul className='md:mb-5'>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                    </ul>
                    <ul className='md:mb-10'>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li className='mb-4'><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                        <li><Link to="/" className='text-white hover:text-yellow-400'>Страница n</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer