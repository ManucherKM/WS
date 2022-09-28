import React, { useState } from 'react'
import plane from "../../assets/img/plane.svg"
import Place from './Place/Place'
import Button from "../../components/UI/Button"
import Modal from '../../components/UI/Modal'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

const Reservation = () => {

  const result = [{
    massPlace: [
      {
        occupied: false,
        num: 1
      },
      {
        occupied: true,
        num: 2
      },
      {
        occupied: false,
        num: 3
      },
      {
        occupied: false,
        num: 4
      },
      {
        occupied: true,
        num: 5
      },
      {
        occupied: false,
        num: 6
      },
      {
        occupied: false,
        num: 7
      },
      {
        occupied: true,
        num: 8
      },
      {
        occupied: false,
        num: 9
      },
      {
        occupied: false,
        num: 10
      },
      {
        occupied: true,
        num: 11
      },
      {
        occupied: false,
        num: 12
      },
      {
        occupied: false,
        num: 13
      },
      {
        occupied: true,
        num: 14
      },
      {
        occupied: false,
        num: 15
      },
      {
        occupied: false,
        num: 16
      },
      {
        occupied: true,
        num: 17
      },
      {
        occupied: false,
        num: 18
      },
      {
        occupied: false,
        num: 19
      },
      {
        occupied: true,
        num: 20
      },
      {
        occupied: false,
        num: 21
      },
      {
        occupied: true,
        num: 22
      },
      {
        occupied: false,
        num: 23
      },
      {
        occupied: false,
        num: 24
      },
      {
        occupied: true,
        num: 25
      },
      {
        occupied: false,
        num: 26
      },
      {
        occupied: false,
        num: 27
      },
      {
        occupied: true,
        num: 28
      },
      {
        occupied: false,
        num: 29
      },
      {
        occupied: false,
        num: 30
      },
      {
        occupied: true,
        num: 31
      },
      {
        occupied: false,
        num: 32
      },
      {
        occupied: false,
        num: 33
      },
      {
        occupied: true,
        num: 34
      },
      {
        occupied: false,
        num: 35
      },
      {
        occupied: false,
        num: 36
      },
      {
        occupied: true,
        num: 37
      },
      {
        occupied: false,
        num: 38
      },
      {
        occupied: false,
        num: 39
      },
      {
        occupied: true,
        num: 40
      },
      {
        occupied: false,
        num: 41
      },
      {
        occupied: true,
        num: 42
      },
      {
        occupied: false,
        num: 43
      },
      {
        occupied: false,
        num: 44
      },
      {
        occupied: true,
        num: 45
      },
      {
        occupied: false,
        num: 46
      },
      {
        occupied: false,
        num: 47
      },
      {
        occupied: true,
        num: 48
      },
      {
        occupied: false,
        num: 49
      },
      {
        occupied: false,
        num: 50
      },
      {
        occupied: true,
        num: 51
      },
      {
        occupied: false,
        num: 52
      },
      {
        occupied: false,
        num: 53
      },
      {
        occupied: true,
        num: 54
      },
      {
        occupied: false,
        num: 55
      },
      {
        occupied: false,
        num: 56
      },
      {
        occupied: true,
        num: 57
      },
      {
        occupied: false,
        num: 58
      },
      {
        occupied: false,
        num: 59
      },
      {
        occupied: true,
        num: 60
      },
      {
        occupied: false,
        num: 61
      },
      {
        occupied: true,
        num: 62
      },
      {
        occupied: false,
        num: 63
      },
      {
        occupied: false,
        num: 64
      },
      {
        occupied: true,
        num: 65
      },
      {
        occupied: false,
        num: 66
      },
      {
        occupied: false,
        num: 67
      },
      {
        occupied: true,
        num: 68
      },
      {
        occupied: false,
        num: 69
      },
      {
        occupied: false,
        num: 70
      },
      {
        occupied: true,
        num: 71
      },
      {
        occupied: false,
        num: 72
      },
      {
        occupied: false,
        num: 73
      },
      {
        occupied: true,
        num: 74
      },
      {
        occupied: false,
        num: 75
      },
      {
        occupied: false,
        num: 76
      },
      {
        occupied: true,
        num: 77
      },
      {
        occupied: false,
        num: 78
      },
      {
        occupied: false,
        num: 79
      },
      {
        occupied: true,
        num: 80
      }
    ],
    nameTrip: "Счастливый билет номер 123",
    date: "01-02-22",
    duration: "2.5",
    price: "150",
    where: "Россия",
    why: "Италия",
    flightNumber: "A144",
    id: 123
  }
  ];

  const [isModalError, setIsModalError] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);

  const [place, setPlace] = useState("Выберите место в самолете");

  const [isPlace, setIsPlace] = useState(false);

  const textRed = isPlace ? "font-semibold ml-auto" : "font-semibold text-red-600 ml-auto"

  const clickBtn = () => {
    if (!isPlace) {
      setIsModalError(true)
      return;
    }

    const obj = {
      id: 123,
      infoPlane: {
        nameTrip: result[0].nameTrip,
        date: result[0].date,
        duration: result[0].duration,
        price: result[0].price,
        where: result[0].where,
        why: result[0].why,
        flightNumber: result[0].flightNumber,
        imgUrl: "URL IMG"
      },
      place: place
    }

    // axios.post("URL",obj)

    setIsModalSuccess(true)
  }

  const clickPlace = (place) => {
    setPlace(place)
    setIsPlace(true)
  }

  return (
    <>
      {isModalError && <Modal click={setIsModalError}>
        <h1 className='text-center text-xl font-medium sm:text-lg'>Вы не выбрали место в самолете</h1>
        <div className='bg-green-400 mt-5 rounded-md'>
          <p className='p-3'>Чтобы выбрать место в самолете нужно кликнуть на одну из зеленых кнопок выше</p>
        </div>
      </Modal>}
      {isModalSuccess && <Modal click={setIsModalSuccess} >
        <h1 className='text-center text-xl font-medium sm:text-lg'>Ваша заявка успешно отправлена</h1>
      </Modal>}
      <div className="container mt-12 mb-20">
        <h1 className="text-3xl font-medium text-center mb-16 sm:text-2xl md:mb-8 lg:mb-12">Забронировать место</h1>
        <div className='lg:hidden'>
          <div className="relative">
            <img className="object-cover h-[470px] absolute opacity-30 z-[-1] top-[-145px] left-0" src={plane} alt="img" />
          </div>
          <div className="flex gap-2 w-[950px] flex-wrap mx-auto mt-[15%]">
            {result[0].massPlace.map((place) => <Place key={place.num} text={place.num} occupied={place.occupied} click={clickPlace} />)}
          </div>
        </div>

        <div className='hidden gap-2 flex-wrap justify-center lg:flex w-full mx-auto'>
          {result[0].massPlace.map((place) => <Place dopStyles="p-10 md:w-[1%]" key={place.num} text={place.num} occupied={place.occupied} click={clickPlace} />)}
        </div>
        <div>
          <h1 className="text-3xl font-medium text-center mt-56 lg:mt-12 sm:text-2xl md:mt-8">Информация о поездке</h1>
          <div className="mt-12">
            <p className="mb-5 text-xl sm:text-base flex md:block">Название поездки: <span className="font-semibold ml-auto">{result[0].nameTrip}</span></p>
            <p className="mb-5 text-xl sm:text-base flex md:block">Дата поездки: <span className="font-semibold ml-auto">{result[0].date}</span></p>
            <p className="mb-5 text-xl sm:text-base flex md:block">Длительность полета: <span className="font-semibold ml-auto">{result[0].duration} часа(ов)</span></p>
            <p className="mb-5 text-xl sm:text-base flex md:block">Стоимость: <span className="font-semibold ml-auto">{result[0].price} $</span></p>
            <p className="mb-5 text-xl sm:text-base flex md:block">Откуда: <span className="font-semibold ml-auto">{result[0].where}</span></p>
            <p className="mb-5 text-xl sm:text-base flex md:block">Куда: <span className="font-semibold ml-auto">{result[0].why}</span></p>
            <p className="mb-5 text-xl sm:text-base flex md:block">Номер рейса: <span className="font-semibold ml-auto">{result[0].flightNumber}</span></p>
            <p className="mb-5 text-xl sm:text-base flex md:block">Ваше место: <span className={textRed}>{place}</span></p>
          </div>
          <div className="border-t-2 border-black mb-8">
            <div className="flex justify-end mt-8">
              <Button dopStyles="w-1/5 text-lg" textButton="Подтвердить" click={clickBtn} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Reservation