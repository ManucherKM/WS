import React from 'react'
import MyLink from '../../../components/UI/MyLink';

const Header = () => {

   

    const clickLink = () => { }

    return (
        <div className="container flex justify-between mt-24 items-center md:flex-col md:mt-12">
            <div className="w-[50%] md:w-full">
                <h1 className="text-5xl mb-5">Комфорт</h1>
                <p className="text-base mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ipsum perspiciatis consequatur eveniet accusantium dolore quam asperiores voluptatibus tempore! Nam officiis doloribus distinctio ex quis aut quia consectetur sit error veniam maxime enim, dolorem at officia magnam consequuntur nihil, impedit porro praesentium nobis. Debitis incidunt ratione nulla sunt voluptates numquam!</p>
                <div>
                    <MyLink textLink="Забронировать" pathUrl="/search" />
                </div>
            </div>
            <div>
                <div className="w-9/12 block ml-auto md:hidden">
                    <img className='' src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default Header