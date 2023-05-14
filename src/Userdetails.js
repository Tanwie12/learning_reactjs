import React from 'react'
import { useParams } from 'react-router-dom'
function Userdetails() {
    const params=useParams()
    const userid = params.userid
  return (
    <div>
     user details{userid}
    
    </div>

  )
}

export default Userdetails