import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

function Hooks() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            setPosts(res.data)}
            
            ).catch(err =>console.log(err))

    },[])
 
  return (
    <div>
        <ul>
           {posts.map(x=><p key={x.id}>{x.title}</p>)}
            </ul> 
    </div>
  )
}

export default Hooks