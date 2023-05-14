

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import RefsDemo from './RefsDemo';
import Modal from './modal';
import Hero from './Hero';
import ErroBoundary from './ErroBoundary';
import Namelist from './namelist';
import Welcome from './welcom';
import NavBar from './NavBar';
import Goods from './goods'
import Nomatch from'./Nomatch'
import Products from './Products';
import Featuredproducst from './Featuredproducst';
import Newproducts from './Newproducts';
import Userdetails from './Userdetails';
import Users from './Users';
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import Hooks from './Hooks';
function App() {
  return (
    <div className='App'>



  <Hooks/>
      {/* <NavBar />
 <Routes>
 <Route path='/' element={<Welcome/>} >
   
 </Route>
 <Route path="/namelist" element={<Namelist/>}></Route>
 <Route path="/goods" element={<Goods/>}></Route>
 <Route path="*" element={<Nomatch/>}></Route>
 <Route path="/products" element={<Products/>}>
 <Route path="featured" element={<Featuredproducst/>}></Route>
 <Route path="newfeature" element={<Newproducts/>}></Route>
 </Route>
 <Route path="/Users" element={<Users/>}>
 <Route path=":userid" element={<Userdetails/>}></Route>
 <Route path="user1" element={<User1/>}></Route>
 <Route path="user2" element={<User2/>}></Route>
 <Route path="user3" element={<User3/>}></Route>
 </Route>
 
 


 
 </Routes> */}

      </div>
    
  );
}

export default App;
 