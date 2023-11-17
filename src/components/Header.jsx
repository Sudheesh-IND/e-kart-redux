import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBadge
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

  const wishlist=useSelector((state)=>state.wishlistReducer)// array of wishlist
  const cart=useSelector((state)=>state.cartReducer)//array of cart
  return (
    <div>
      <MDBNavbar light className='bg-light'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png'
              height='60'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <div className='ms-auto'>
            <Link to={'wishlist'}>
              <button className='btn btn-success me-2'><i class="fa-solid fa-heart"></i> <MDBBadge className='ms-2' color='info'>
              {wishlist.length}
              </MDBBadge></button>
            </Link>
            <Link to={'cart'}> <button className='btn btn-dark' ><i class="fa-solid fa-cart-shopping"></i> <MDBBadge className='ms-2' color='info'>
           {cart.length}
            </MDBBadge></button></Link>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header