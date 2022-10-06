import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import plane from "../../assets/img/plane.svg"
import Place from './Place/Place'
import Button from "../../components/UI/Button"
import Modal from '../../components/UI/Modal'
import Footer from '../../components/Footer/Footer'
import axios from "../../axios"
import Loading from '../../components/UI/Loading'


const Reservation = () => {

  const dipatch = useDispatch();

  const { id } = useParams();

  const user = useSelector(state => state.user)

  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchPlane = axios.get(`/reservation/${id}`);
    fetchPlane.then(res => { setResult(res.data.flight) })
  }, [])

  const [isModalError, setIsModalError] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [place, setPlace] = useState("Выберите место в самолете");
  const [isPlace, setIsPlace] = useState(false);
  const textRed = isPlace ? "font-semibold ml-auto" : "font-semibold text-red-600 ml-auto"

  const clickBtn = async () => {

    if (!isPlace) {
      setIsModalError(true)
      return;
    }

    const obj = {
      userId: user._id,
      flightId: id,
      chosenPlace: place
    }

    const reservationPlace = await axios.post("/reservation", obj);


    setResult(reservationPlace.data.newPlane);
    dipatch({ type: "auth", newUser: reservationPlace.data.user })
    setIsModalSuccess(true)
  }

  const clickPlace = (place) => {
    setPlace(place)
    setIsPlace(true)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {result === null &&
        <div className='loader-wrapper w-full h-[90vh] flex items-center justify-center'>
          <Loading />
        </div>
      }
      {result !== null && isModalError && <Modal click={setIsModalError}>
        <h1 className='text-center text-xl font-medium sm:text-lg'>Вы не выбрали место в самолете</h1>
        <div className='bg-green-400 mt-5 rounded-md'>
          <p className='p-3'>Чтобы выбрать место в самолете нужно кликнуть на одну из зеленых кнопок выше</p>
        </div>
      </Modal>}
      {result !== null && isModalSuccess && <Modal click={setIsModalSuccess} >
        <h1 className='text-center text-xl font-medium sm:text-lg'>Ваша заявка успешно отправлена</h1>
      </Modal>}
      {result !== null &&
        <div className="container mt-12 mb-20">
          <h1 className="text-3xl font-medium text-center mb-16 sm:text-2xl md:mb-8 lg:mb-12">Забронировать место</h1>
          <div className='lg:hidden'>
            <div className="relative">
              <img className="object-cover h-[470px] absolute opacity-30 z-[-1] top-[-145px] left-0" src={plane} alt="img" />
            </div>
            <div className="flex gap-2 w-[950px] flex-wrap mx-auto mt-[15%]">
              {result !== null && result.massPlace.map((place) => <Place key={place.num} text={place.num} occupied={place.occupied} click={clickPlace} />)}
            </div>
          </div>

          <div className='hidden gap-2 flex-wrap justify-center lg:flex w-full mx-auto'>
            {result !== null && result.massPlace.map((place) => <Place dopStyles="p-10 md:w-[1%]" key={place.num} text={place.num} occupied={place.occupied} click={clickPlace} />)}
          </div>
          <div>
            <h1 className="text-3xl font-medium text-center mt-56 lg:mt-12 sm:text-2xl md:mt-8">Информация о поездке</h1>
            <div className="mt-12">
              <p className="mb-5 text-xl sm:text-base flex md:block">Название поездки: <span className="font-semibold ml-auto">{result !== null && result.nameTrip}</span></p>
              <p className="mb-5 text-xl sm:text-base flex md:block">Дата поездки: <span className="font-semibold ml-auto">{result !== null && result.date}</span></p>
              <p className="mb-5 text-xl sm:text-base flex md:block">Длительность полета: <span className="font-semibold ml-auto">{result !== null && result.dauration} часа(ов)</span></p>
              <p className="mb-5 text-xl sm:text-base flex md:block">Стоимость: <span className="font-semibold ml-auto">{result !== null && result.price} $</span></p>
              <p className="mb-5 text-xl sm:text-base flex md:block">Откуда: <span className="font-semibold ml-auto">{result !== null && result.where}</span></p>
              <p className="mb-5 text-xl sm:text-base flex md:block">Куда: <span className="font-semibold ml-auto">{result !== null && result.why}</span></p>
              <p className="mb-5 text-xl sm:text-base flex md:block">Номер рейса: <span className="font-semibold ml-auto">{result !== null && result.flightNumber}</span></p>
              <p className="mb-5 text-xl sm:text-base flex md:block">Ваше место: <span className={textRed}>{place}</span></p>
            </div>
            <div className="border-t-2 border-black mb-8">
              <div className="flex justify-end mt-8">
                <Button dopStyles="w-1/5 text-lg" textButton="Подтвердить" click={clickBtn} />
              </div>
            </div>
          </div>
        </div>
      }

      <Footer />
    </>
  )
}

export default Reservation