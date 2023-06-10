import React from 'react'
import { rightData } from '../assets/data';
import Card from './commons/Card';

const RightSideBar = () => {
    return (
    <div className="flex flex-col gap-3">
      {rightData.map((data, index) => (
        <Card
          key={index}
          logo={<data.logo className="w-8 h-8" />}
          title={data.title}
          desc={data.desc}
          icon={<data.icon className="w-8 h-8" />}
        />
      ))}
    </div>
  );
  
}

export default RightSideBar