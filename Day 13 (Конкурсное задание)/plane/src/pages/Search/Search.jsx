import React, { useState } from 'react'
import Input from "../../components/Input/Input"
import svgSearch from "../../assets/img/search.svg"
import CardTrip from './CardTrip/CardTrip'
import NoFound from './NoFound/NoFound'
import Footer from "../../components/Footer/Footer"

const Search = () => {

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Отдых в горах Италии",
      subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto similique ipsam accusamus neque voluptatum vitae unde eos excepturi, dolorem, nulla blanditiis mollitia totam provident sunt aliquid eius amet dolorum?",
      price: "200",
      imgUrl: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
      freePlaces: 188,
    },
    {
      id: 2,
      title: "Что-то",
      subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto similique ipsam accusamus neque voluptatum vitae unde eos excepturi, dolorem, nulla blanditiis mollitia totam provident sunt aliquid eius amet dolorum?",
      price: "200",
      imgUrl: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
      freePlaces: 188,
    },
    {
      id: 3,
      title: "Это",
      subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi architecto similique ipsam accusamus neque voluptatum vitae unde eos excepturi, dolorem, nulla blanditiis mollitia totam provident sunt aliquid eius amet dolorum?",
      price: "200",
      imgUrl: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
      freePlaces: 188,
    },
  ])

  const [searchVal, SetSearchVal] = useState("");

  const newMass = cards.filter((card) => {
    const title = card.title.toLowerCase();
    const inptVal = searchVal.toLowerCase();
    return title.includes(inptVal);
  });

  return (
    <>
      <div className='container'>
        <div className='mt-12 flex items-center justify-center '>
          <div className='w-2/5 mr-4 lg:w-3/5'>
            <Input getVal={SetSearchVal} dopStyles={"rounded"} bgText={"Название города"} />
          </div>
          <div>
            <button>
              <img src={svgSearch} alt="Search" />
            </button>
          </div>
        </div>
        <div className="mt-12 mb-24 md:mb-12 lg:mb-16">
          {newMass.length !== 0 && newMass.map((card) => <CardTrip pathUrl={`/reservation/${card.id}`} key={card.id} imgUrl={card.imgUrl} title={card.title} subtitle={card.subtitle} idCard={card.id} dopStyles="mt-10" />)}
          {newMass.length === 0 && <NoFound />}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Search