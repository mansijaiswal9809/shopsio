import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { UseProductContext } from '../context/ProductContext';
const Navbar = () =>{ 
  const {dispatch, All}= UseProductContext()
// console.log("jdhf",All)

  return (
    <div style={{boxShadow: "rgba(132, 11, 132, 0.35) 0px 5px 15px", position:'sticky', top:0, zIndex:999, backgroundColor:'white'}}>
      <div className='nav-center' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div className='nav-header'>
          <Link to='/'>
            <img src="https://tse4.mm.bing.net/th?id=OIP.uYFsWIYbWLvJjqcaKSrLTwHaGl&pid=Api&P=0" width='90px' alt='shopsio' />
          </Link>
        </div>
        <div className='nav-links' style={{display:"flex", gap:"30px", alignItems:"center", color:"purple", fontWeight:"650"}}>
          <button onClick={()=>dispatch({type:"All", payload:All})}><Link to='/products'>All</Link></button>
          <button onClick={()=>dispatch({type:"Men", payload:All})}><Link to='/products'>Men</Link></button>
          <button onClick={()=>dispatch({type:"Women", payload:All})}><Link to='/products'>Women</Link></button>
          <button onClick={()=>dispatch({type:"Home", payload:All})}><Link to='/products'>Home & Decors</Link></button>
          {/* {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )} */}
        </div>
        <div style={{display:"flex", height:"45px", alignItems:"center", justifyContent:"space-between", border:"1px solid purple", padding:'0 20px', width:"300px", borderRadius:"30px"}}><input type="search" style={{outline:"none"}} placeholder="Search"/><BsSearch color='purple'/></div>
        <div style={{display:"flex", paddingRight:"30px", alignItems:"center"}}>
        <FaShoppingCart size="30px" color='purple'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
