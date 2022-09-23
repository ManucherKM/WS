import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

    return (
        <div className={`max-w-sm bg-white rounded-lg border border-gray-300 shadow-m md:max-w-full`}>
            <Link href="#">
                <img className="rounded-t-lg " src={props.imgUrl} alt="img" />
            </Link>
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Отдых в горах Италии</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quaerat odio et reprehenderit repellendus?</p>
                <Link href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-black bg-yellow-300 hover:text-white rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Смотреть
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    )
}

export default Card