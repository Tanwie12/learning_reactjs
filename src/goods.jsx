import React from 'react'
import { useNavigate } from 'react-router-dom'

function Goods() {
   const navigate=useNavigate()
   const Handleclick=() => {
     
     return navigate(-1)

    }
  return (
    <div>goods
        <button onClick={Handleclick}>go back</button>
    </div>
  )
}

export default Goods