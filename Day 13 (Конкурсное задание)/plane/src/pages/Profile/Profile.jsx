import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Card from './Card/Card';
import Footer from "../../components/Footer/Footer"

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()



  const exitUser = () => {
    dispatch({ type: "exit" })
  }

  return (
    <>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <img className='w-80 h-80 object-cover rounded-full mt-10 md:w-40 md:h-40' src={user.logoImg} alt="userImg" />
          <Link to="/" className='hover:underline mt-5' onClick={exitUser}>Выйти</Link>
          <div className='w-2/4 mt-20 lg:w-3/4 md:w-4/5'>
            <p className='text-xl flex md:text-lg'>Имя: <span className='font-semibold ml-auto'>{user.name}</span></p>
            <p className='text-xl flex mt-4 md:text-lg'>Email: <span className='font-semibold ml-auto'>{user.email}</span></p>
            <p className='text-xl flex mt-4 md:text-lg'>Возраст: <span className='font-semibold ml-auto'>{user.age}</span></p>
            <p className='text-xl flex mt-4 md:text-lg'>Дата регистрации: <span className='font-semibold ml-auto'>{user.createdAt}</span></p>
          </div>
          <h2 className='font-medium text-2xl mt-28'>Мои полеты</h2>
          <div className='mt-10 mb-20 flex flex-wrap gap-10 justify-center'>
            {user.flying.length !== 0 && user.flying.map((card) => <Card key={card.id} info={card} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile