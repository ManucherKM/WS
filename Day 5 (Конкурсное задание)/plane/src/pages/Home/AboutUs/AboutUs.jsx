import React from 'react'
import trophy from "../../../assets/img/trophy.svg"


const AboutUs = () => {
    return (
        <div className='container mt-12'>
            <h2 className='text-3xl font-medium text-center mb-8'>О нас</h2>

            <div>

                <div className='flex justify-between'>

                    <div className='w-1/4 border-2 rounded-3xl'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <img className='mb-3' src={trophy} alt="Logo" />
                            <p className="text-base">Мы входим в топ 10 лучших компаний России в рамках нашего направления</p>
                        </div>
                    </div>
                    <div className='w-1/4 border-2 rounded-3xl'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <img className='mb-3' src={trophy} alt="Logo" />
                            <p className="text-base">Мы входим в топ 10 лучших компаний России в рамках нашего направления</p>
                        </div>
                    </div>
                    <div className='w-1/4 border-2 rounded-3xl'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <img className='mb-3' src={trophy} alt="Logo" />
                            <p className="text-base">Мы входим в топ 10 лучших компаний России в рамках нашего направления</p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default AboutUs