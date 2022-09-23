import React from 'react'
import trophy from "../../../assets/img/trophy.svg"
import People from "../../../assets/img/People.svg"
import country from "../../../assets/img/country.svg"


const AboutUs = () => {
    return (
        <div className='container mt-24'>
            <h2 className='text-3xl font-medium text-center mb-12'>О нас</h2>
            <div>
                <div className='flex justify-between'>
                    <div className='w-1/4'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <img className='mb-3' src={trophy} alt="Logo" />
                            <p className="text-base">Мы входим в топ 10 лучших компаний России в рамках нашего направления</p>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <img className='mb-3' src={People} alt="Logo" />
                            <p className="text-base">В нашей компании работает больше 10 000 человек</p>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <img className='mb-3' src={country} alt="Logo" />
                            <p className="text-base">Наша компания сотрудничает с компаниями по всему миру</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs