import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { deleteFromCart, emptyCart } from '../Redux/Slices/cartSlice';

function Cart() {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const cart=useSelector((state)=>state.cartReducer) //array of cart items
  const [total,setTotal]=useState(0)

  const getTotal=()=>{
    if(cart.length>0){
      setTotal(cart.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
    }
  }

  const handleCheckOut=()=>{
    dispatch(emptyCart())
    alert('Order placed successuflly')
    navigate('/')
  }

  useEffect(()=>{
    getTotal()
  },[])
  return (
    <div style={{minHeight:'100vh',maxHeight:'100%'}}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
        {
      cart.length>0? (

        <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>Product Name</th>
          <th scope='col'>Image</th>
          <th scope='col'>Price</th>
          <th scope='col'>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          cart.map((item)=>(
            <tr>
          <th scope='row'>{item.id}</th>
          <th>{item.title}</th>
          <td><img style={{width:'150px'}} src={item.thumbnail} alt="" /></td>
          <td>{item.price}</td>
          <td><i style={{cursor:'pointer'}} onClick={()=>dispatch(deleteFromCart(item.id))} className='fa-solid fa-trash'></i></td>
        </tr>
          ))
        }
        
       
      </MDBTableBody>
    </MDBTable>

      ):<div className='text-center mt-5' style={{width:'100%'}}>
      <div>
        <img src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?w=235&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
      </div>
     <Link to={'/'}> <button className='btn btn-dark mt-5'>Back to home</button></Link>
    </div>
    }
        </div>
        <div className="col-md-4">
          <div className='mt-5 text-center'>
               <h2>Order Summary</h2>
               <h6>No of products: {cart.length}</h6>
               <h5>Total:{total}</h5>
               <div className='text-center mt-4'>
                <button onClick={()=>handleCheckOut()} className="btn btn-success">Check Out</button>
               </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart