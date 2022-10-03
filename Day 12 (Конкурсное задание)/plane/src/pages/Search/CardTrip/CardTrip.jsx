import React from 'react'
import dateImg from "../../../assets/img/date.svg"
import seat from "../../../assets/img/seat.svg"
import price from "../../../assets/img/price.svg"
import MyLink from '../../../components/UI/MyLink'

const CardTrip = (props) => {

    return (
        <div className={`rounded-xl shadow-2xl relative ${props.dopStyles}`}>
            <div className="flex md:flex-col">
                <div className="w-2/4 md:w-full">
                    <img className="rounded-l-xl object-cover h-full md:rounded-none md:rounded-t-xl md:w-full md:h-60" src={props.imgUrl} alt="Img" />
                </div>
                <div className="w-2/4 p-7 md:w-full">
                    <h3 className="text-xl font-medium mb-5">{props.title}</h3>
                    <p className="text-base mb-8">{props.subtitle}</p>

                    <div className="flex gap-10 items-center flex-wrap lg:gap-7 sm:items-start">
                        <div className="flex gap-3 items-center sm:gap-5">
                            <img src={seat} alt="img" />
                            <p className="font-medium text-xl">85</p>
                        </div>
                        <div className="flex gap-3 items-center sm:gap-5 sm:mx-auto">
                            <img src={dateImg} alt="img" />
                            <p className="font-medium text-xl">09-12-22</p>
                        </div>
                        <div className="flex gap-3 items-center sm:gap-5">
                            <img src={price} alt="img" />
                            <p className="font-medium text-xl">120 $</p>
                        </div>
                    </div>

                    <div className="mt-24 lg:mt-10 dek:mt-16">
                        <MyLink pathUrl={`/reservation/${props.idCard}`} textLink="Подробнее" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardTrip