import React, { useState } from 'react'
import Card from './Card/Card'

const Popular = () => {
    const [populars, setPopular] = useState([
        {
            id: 1,
            imgUrl: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Отдых в горах Италии1",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quaerat odio et reprehenderit repellendus?"
        },
        {
            id: 2,
            imgUrl: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
            title: "Отдых в горах Италии2",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quaerat odio et reprehenderit repellendus?"
        },
        {
            id: 3,
            imgUrl: "https://images.unsplash.com/photo-1443632864897-14973fa006cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Отдых в горах Италии",
            subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quaerat odio et reprehenderit repellendus?"
        },
    ])


    return (
        <div className='container mt-24'>
            <h2 className='text-3xl font-medium text-center mb-12'>Популярное</h2>
            <div className='flex justify-between items-center md:flex-col dek:gap-8'>

                {populars.length !== 0 && populars.map((popular) => <Card pathUrl={`/reservation/${popular.id}`} key={popular.id} imgUrl={popular.imgUrl} title={popular.title} subtitle={popular.subtitle} hiddenId={popular.id} />)}

            </div>
        </div>
    )
}

export default Popular