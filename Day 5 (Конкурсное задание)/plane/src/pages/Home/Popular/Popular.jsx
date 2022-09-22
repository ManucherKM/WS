import React from 'react'
import Card from '../../../components/Card/Card'

const Popular = () => {
    return (
        <div className='container mt-12'>
            <h2 className='text-3xl font-medium text-center mb-8'>Популярное</h2>
            <div className='flex justify-between items-center md:flex-col dek:justify-around'>
                <div className='md:mb-5'>
                    <Card imgUrl={"https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"} />
                </div>

                <div className=''>
                    <Card imgUrl={"https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />
                </div>

                <div className='dek:hidden'>
                    <Card itemEnd={true} imgUrl={"https://images.unsplash.com/photo-1443632864897-14973fa006cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} />
                </div>
            </div>
        </div>
    )
}

export default Popular