import React from 'react'
import "./Sidebaroption.css";

function Sidebaroption({Icon, title , number}) {
  return (
    <div className='sidebarOption'>
        <Icon />
         <h3>{title}</h3>
         <p>{number}</p>
    </div>
  )
}

export default Sidebaroption