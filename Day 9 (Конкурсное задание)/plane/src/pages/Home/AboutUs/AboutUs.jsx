import React from 'react'

const AboutUs = () => {
    return (
        <div className='container mt-20'>
            <h2 className='text-3xl font-medium text-center mb-12'>О нас</h2>
            <div>
                <div className='flex justify-between md:flex-col md:items-center'>
                    <div className='w-1/4 md:w-2/4 md:mb-5 sm:w-3/4'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <span className='text-7xl font-bold mb-4 text-blue dek:text-5xl whitespace-nowrap'>5</span>
                            <p className="text-base">Мы входим в топ 5 лучших компаний мира в рамках нашего направления</p>
                        </div>
                    </div>
                    <div className='w-1/4 md:w-2/4 md:mb-5'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <span className='text-7xl font-bold mb-4 text-blue dek:text-5xl whitespace-nowrap'>10 000</span>
                            <p className="text-base">В нашей компании работает больше 10 000 человек</p>
                        </div>
                    </div>
                    <div className='w-1/4 md:w-2/4 md:mb-5 sm:w-3/4'>
                        <div className='flex flex-col items-center p-5 text-center'>
                            <span className='text-7xl font-bold mb-4 text-blue dek:text-5xl whitespace-nowrap'>48</span>
                            <p className="text-base">Наша компания сотрудничает с 48-ю компаниями по всему миру</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs