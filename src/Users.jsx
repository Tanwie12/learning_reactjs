import React from 'react'
import { Outlet, Link, useSearchParams } from 'react-router-dom'
function Users() {
    const{searchParams,setSearchParams}=useSearchParams()
  return (
    <div>
    <Link to='user1'><p>user 1</p></Link>
    <Link to='user2'><p>user 2</p></Link>
    <Link to='user3'><p>user 3</p></Link>
    <Outlet/>
    <div>
        <button onClick={()=>setSearchParams({filter:'active'})}>active users</button>
        <button onClick={()=>setSearchParams({})}>reset users</button>
    </div>
        </div>
  )
}

export default Users