import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { deleteFromWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function Wishlist() {

  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()

  const handleWishlistToCart=(item)=>{
      dispatch(addToCart(item))
      dispatch(deleteFromWishlist(item.id))
  }
  return (
    <div>
      <div className="container"  style={{ minHeight: '100vh', maxHeight: '100%' }}>
        <div className="row">
          <div className="col-md-12 d-flex flex-col flex-wrap">
          {
              wishlistArray.length>0? wishlistArray.map((item)=>(
                <MDBCard className='m-3 bg-light' style={{width:'280px',textAlign:'start'}}>
              <MDBCardImage style={{height:'250px'}} src={item.thumbnail} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{item.title.slice(0,20)}...</MDBCardTitle>
                <MDBCardText style={{fontWeight:'900'}}>
                  Price: $ {item.price}
                </MDBCardText>
                <MDBBtn onClick={()=>dispatch(deleteFromWishlist(item.id))}  className='btn btn-danger'><i class="fa-solid fa-trash"></i></MDBBtn>
                <MDBBtn onClick={()=>handleWishlistToCart(item)} className='ms-2 btn btn-dark' href='#'><i class="fa-solid fa-cart-shopping"></i></MDBBtn>
              </MDBCardBody>
            </MDBCard>
              )):<div className='text-center mt-5' style={{width:'100%'}}>
                    <div>
                      <img src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?w=235&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                    </div>
                   <Link to={'/'}> <button className='btn btn-dark mt-5'>Back to home</button></Link>
                 </div>
              
              
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist