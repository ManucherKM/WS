import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from "../../axios"
import CardTrip from './CardTrip/CardTrip'
import NoFound from './NoFound/NoFound'
import Input from "../../components/Input/Input"
import Footer from "../../components/Footer/Footer"
import Loading from "../../components/UI/Loading"
import svgSearch from "../../assets/img/search.svg"

const Search = () => {

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const getFlyghts = async () => {
    const fetchFlyghts = await axios.get("/search");
    dispatch({ type: "getFlights", flyghts: fetchFlyghts.data });
  };

  useEffect(() => {
    getFlyghts()
  }, [])

  const flyghts = useSelector(state => state.flyghts);

  const [searchVal, SetSearchVal] = useState("");

  useEffect(() => {
    if (flyghts !== null) {
      setCards(flyghts.flight);
      setIsLoading(false)
    }
  }, [flyghts])

  const [cards, setCards] = useState([])
  const newMass = cards.filter((card) => {
    const title = card.nameTrip.toLowerCase();
    const inptVal = searchVal.toLowerCase();
    return title.includes(inptVal);
  });

  return (
    <>
      <div className='container'>
        <div className='mt-12 flex items-center justify-center '>
          <div className='w-2/5 mr-4 lg:w-3/5'>
            <Input getVal={SetSearchVal} dopStyles={"rounded"} bgText={"Название поездки"} />
          </div>
          <div>
            <button>
              <img src={svgSearch} alt="Search" />
            </button>
          </div>
        </div>
        <div className="mt-12 mb-24 md:mb-12 lg:mb-16">
          {isLoading &&
            <div className='loader-wrapper w-full h-[50vh] flex justify-center items-center'>
              <Loading />
            </div>
          }
          {!isLoading && newMass.length !== 0 && newMass.map((card) => <CardTrip pathUrl={`/reservation/${card._id}`} key={card._id} imgUrl={card.urlImg} title={card.nameTrip} subtitle={card.description} idCard={card._id} dopStyles="mt-10" />)}
          {!isLoading && newMass.length === 0 && <NoFound />}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Search