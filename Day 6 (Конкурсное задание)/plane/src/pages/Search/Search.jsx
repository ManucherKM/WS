import React from 'react'
import Input from "../../components/Input/Input"
import svgSearch from "../../assets/img/search.svg"

const Search = () => {
  return (
    <div className='container'>
      <div className='mt-12 flex items-center justify-center'>
        <div className='w-2/5 mr-4'>
          <Input dopStyles={"rounded"} bgText={"Название города"} />
        </div>
        <div>
          <button>
            <img src={svgSearch} alt="Search" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search