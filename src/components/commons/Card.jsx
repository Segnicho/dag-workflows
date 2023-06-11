import React from 'react'

const Card = ({logo,title, desc, icon }) => {
  return (
    <div className="flex h-[55px] p-2 w-[300px] shadow-md cursor-pointer">
      <div>{logo}</div>
      <div  className="ml-2">
        <div  className="font-semibold ">{title}</div>
        <div  className='text-gray-400'>{desc}</div>
      </div>
      <div className="ml-auto mr-1 my-auto">{icon}</div>
    </div>
  );
}

export default Card