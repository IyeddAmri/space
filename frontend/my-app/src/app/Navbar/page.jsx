import React from 'react'
import '@/app/Navbar/navbar.css'

  function page() {
  return (
    <div className='site-container mx-auto px-6"'>
      <div className=' flex justify-between mx-auto px-0 py-5'>
        <div className='flex items-center justify-between whitespace-nowrap order-1'>
         
                <a  class="btn-glow"  href="">Book Now</a>

        </div>
        <a   className="uppercase tracking-wide mr-1 md:mr-8 xl:mr-12" href="/">
            <svg className="w-52 md:w-72" viewBox="0 0 1037 48" fill="none" >
              <g fill="white" className="transition-all duration-300 dark:fill-white">
                <path d="m9.79,24.06C3.29,22.98-1.05,18.24-1.05,12.28-1.05,5.04,4.3-.18,13.58-.18h39.68v6.84H13.58c-5.55,0-7.31,2.03-7.31,5.49,0,2.91,2.1,5.01,5.96,5.69l34.67,5.89c6.57,1.08,10.83,5.89,10.83,11.72,0,7.25-5.35,12.46-14.63,12.46H-.1v-6.84h43.2c5.49,0,7.31-2.03,7.31-5.42,0-3.05-2.17-5.21-6.03-5.82l-34.6-5.76Z"></path>
                <path d="m65.46,47.9V-.18h37.79c12.46,0,19.3,5.35,19.3,13.88s-7.72,13.88-19.3,13.88h-29.93v20.32h-7.86Zm7.86-26.68h29.93c7.25,0,11.38-2.78,11.38-7.52s-3.39-7.52-11.38-7.52h-29.93v15.03Z"></path>
                <path d="m152.82-.72l32.17,48.08h-8.94l-8.4-12.6h-37.65l-8.4,12.6h-8.67L145.03-.72h7.79Zm-18.42,29.12h29.12l-14.56-21.87-14.56,21.87Z"></path>
                <path d="m217.64,48.44c-22.82,0-34.4-8.6-34.4-24.24v-.68c0-15.64,11.58-24.24,34.4-24.24h.47c18.22,0,30.88,5.89,30.88,16.12v.34h-8.8v-.34c0-6.23-10.23-9.82-22.08-9.82h-.47c-18.08,0-26.07,6.5-26.07,17.95v.68c0,11.58,7.99,17.95,26.07,17.95h.47c11.85,0,22.08-3.59,22.08-9.82v-.34h8.8v.34c0,10.23-12.66,16.12-30.88,16.12h-.47Z"></path>
                <path d="m257.94,47.9V-.18h52.89v6.43h-45.03v14.76l45.03-.07v6.37l-45.03.07v14.09h45.03v6.43h-52.89Z"></path>
                </g>
                </svg>
                </a>
        <a  id='a' className="active btn-nav" href="/">Education</a>
        <a  id='a' className="active btn-nav" href="/">Games</a>
        <a  id='a' className="active btn-nav" href="/">Do You Know</a>
        <a  id='a' className="active btn-nav" href="/">Mission</a>
        <a  id='a' className="active btn-nav" href="/">Discover Earth</a>
        <a  id='a' className="active btn-nav" href="/">Login</a>



        <nav className='-translate-x-full block trasnform duration-500 max-w-lg fixed left-0 top-0 z-40 xl:hidden ease-out w-full dark:bg-opacity-100 h-full sm:flex order-0 group sm:justify-center sm:items-center bg-black transition-all'>
        </nav>
      </div>
 
       </div>
  )
}

export default page
