import React from "react";
import logo from '../../assets/img/svg/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'



function Index() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [isTransparent, setTransparent] = React.useState(false);
    React.useEffect(() => {
      window.addEventListener('scroll', (e) => {
        let scrollTop = window.pageYOffset;
        if(scrollTop < 5 && isTransparent) {
          setTransparent(false)
        }
        if(scrollTop > 5 && !isTransparent) {
          setTransparent(true)
        }
      })
      return () => {
      };
    }, []);
  return (
    <nav className={`bg-gradient-to-r z-10 fixed w-full bg-opacity-75 ${isTransparent ? 'from-header-gradient-start-scroll to-header-gradient-end-scroll' : 'from-header-gradient-start to-header-gradient-end'}`}>
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
    <div className="relative flex items-center justify-between h-16">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button onClick={() => {setNavbarOpen(!navbarOpen)}} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center">
        <img className="block h-5 w-auto"  src={logo} alt="starzplay"/>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-2">
            <a href="/" className="text-gray-300 hover:text-white px-1 py-7 rounded-md text-sm font-medium">MOVIES</a>
            <a href="/" className="text-gray-300 hover:text-white px-1 py-7 rounded-md text-sm font-medium">TV SHOWS</a>
            <a href="/" className="text-gray-300 hover:text-white px-1 py-7 rounded-md text-sm font-medium">ARABIC</a>
            <a href="/" className="text-gray-300 hover:text-white px-1 py-7 rounded-md text-sm font-medium">KIDS</a>
            <a href="/" className="text-gray-300 hover:text-white px-1 py-7 rounded-md text-sm font-medium">CHANNELS</a>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          <div  className='h-6 w-6'>
          <FontAwesomeIcon icon={faSearch} size='sm' />
          </div>
          {/* <i className='far fa-search'></i> */}
        </button>
        <div className="ml-3 relative">
          <div>
            <button type="button" className="bg-gray-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-header-gradient-end-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
            </button>
            <a href="/" className="text-gray-300 hover:text-white px-3 py-7 rounded-md text-sm font-medium">Log In</a>
            <a href="/" className="text-gray-300 hover:text-white px-3 py-7 rounded-md text-sm font-medium">Sign Up</a>
            <a href="/" className="text-gray-300 hover:text-white px-3 py-7 rounded-md text-sm font-medium">العربية</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={`sm:hidden transition-all delay-1 ease-in-out duration-1000 overflow-hidden ${navbarOpen ? 'h-48' : 'h-0'}`} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="/" className="bg-gray-900 text-white block px-1 py-7 rounded-md text-base font-medium">Dashboard</a>
      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-1 py-7 rounded-md text-base font-medium">Team</a>
      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-1 py-7 rounded-md text-base font-medium">Projects</a>
      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-1 py-7 rounded-md text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
    
  )
}

export default Index
