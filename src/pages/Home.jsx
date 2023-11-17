import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import useFetch from '../Hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../Redux/Slices/wishlistSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function Home() {

  const data=useFetch('https://dummyjson.com/products')

  console.log(data)

  const dispatch=useDispatch()

  return (
    <div>
      <div className="container" style={{ minHeight: '100vh', maxHeight: '100%' }}>
        <div className="row mt-4">
          <div className="col-md-12 d-flex flex-col flex-wrap">
            {
              data.length>0? data.map((item)=>(
                <MDBCard className='m-3 bg-light' style={{width:'280px',textAlign:'start'}}>
              <MDBCardImage style={{height:'250px'}} src={item.thumbnail} position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle>{item.title.slice(0,20)}...</MDBCardTitle>
                <MDBCardText style={{fontWeight:'900'}}>
                  Price: $ {item.price}
                </MDBCardText>
                <MDBBtn href='#' onClick={()=>dispatch(addToWishlist(item))} className='btn btn-success'><i class="fa-solid fa-heart"></i></MDBBtn>
                <MDBBtn onClick={()=>dispatch(addToCart(item))} className='ms-2 btn btn-dark' href='#'><i class="fa-solid fa-cart-shopping"></i></MDBBtn>
              </MDBCardBody>
            </MDBCard>
              )):'No data Found'
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home