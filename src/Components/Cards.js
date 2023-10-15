import React from 'react'

const Cards = (props) => {
  return (
    <>
        <div className="w-[18rem] rounded-xl h-32 bg-white shadow-lg border-solid border-[1px] border-gray-400 p-2">
            <h1>{props.title}</h1>
        </div>
    </>
  )
}

export default Cards