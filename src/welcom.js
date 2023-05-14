import React from 'react';
import { useNavigate } from 'react-router-dom';




function Welcom() {
    const navigate=useNavigate();
  return (
    <>
    <div>welcom</div>
    <button type="button" onClick={()=>navigate( "goods" )}>button</button>
    </>
  )
}


export default Welcom