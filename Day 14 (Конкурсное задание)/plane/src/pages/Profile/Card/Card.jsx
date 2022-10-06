import React from 'react'

const Card = ({ info }) => {
    return (
        <div className='rounded-2xl border-2 border-gray-300 w-2/5 lg:w-auto'>
            <div>
                <img className='rounded-t-xl object-cover w-full h-96 md:h-64' src={info.urlImg} alt="img" />
            </div>
            <div>
                <div className='p-5 flex flex-col gap-1 sm:gap-2'>
                    <p className='flex sm:flex-col'>Название поездки: <span className="font-medium ml-auto text-base sm:m-0">{info.nameTrip}</span></p>
                    <p className='flex sm:flex-col'>Дата: <span className="font-medium ml-auto text-base sm:m-0">{info.date}</span></p>
                    <p className='flex sm:flex-col'>Длительность: <span className="font-medium ml-auto text-base sm:m-0">{info.duration} часа</span></p>
                    <p className='flex sm:flex-col'>Цена: <span className="font-medium ml-auto text-base sm:m-0">{info.price} $</span></p>
                    <p className='flex sm:flex-col'>Откуда: <span className="font-medium ml-auto text-base sm:m-0">{info.where}</span></p>
                    <p className='flex sm:flex-col'>Куда: <span className="font-medium ml-auto text-base sm:m-0">{info.why}</span></p>
                    <p className='flex sm:flex-col'>Номер рейса: <span className="font-medium ml-auto text-base sm:m-0">{info.flightNumber}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card