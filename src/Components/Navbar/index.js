import React from 'react'
import { useEffect } from 'react'
import { useNavigate, } from 'react-router-dom'
import './Nav.css'

const Navbar = () => {

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    const isLogin = localStorage.getItem('user')
    if (!isLogin) {
      navigate('/login', { replace: true })
    }
  }

  const navigate = useNavigate()

  const handleNav = (route) => {
    navigate(route, { replace: true })
  }

const handleLogOut =()=>{
  localStorage.removeItem('user')
  navigate('/login', { replace: true })
}

  return (
    <>
      <header>
        <div className='nav-bar'>
          <div></div>
          <div className='Nav-links'>
            <button className='link-btn' onClick={() => handleNav('/')}>Home</button>
            <button className='link-btn' onClick={() => handleNav('/product')}>Product</button>
            <button className='link-btn' onClick={() => handleNav('/about')}>About</button>
            <button className='link-btn' onClick={() => handleNav('/contact')}>Contact</button>
            <button className='link-btn' onClick={() => handleNav('/addproduct')}>Add Product</button>
            <button className='link-btn' onClick={handleLogOut}>logout</button>

          </div>
          <div></div>
        </div>
      </header>
    </>
  )
}

export default Navbar;
