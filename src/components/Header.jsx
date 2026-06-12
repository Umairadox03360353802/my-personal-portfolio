import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";


import { useState } from "react"

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [toggleIcon, setToggleIcon] = useState(true)
  return (
    <nav className=" flex flex-wrap justify-between md:items-end text-white px-10 mx-5 pt-6 md:px-20 ">

      <span className="text-4xl font-extrabold tracking-wide">Portfolio</span>

      <ul className={`${showMenu ? 'block' : 'hidden'} md:flex gap-6 font-semibold md:mt-5 mx-20 py-2 mt-6 px-2 rounded-xl
           bg-opacity-30 bg-black text-center md:static md:border-none md:bg-transparent md:mx-0 `}>
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0" >About Us</li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Skills</li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </a>
        <a href="#Contacts">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contacts</li>
        </a>
      </ul>
      {
        toggleIcon ? (
          <RiMenu3Fill size={32} color="white" className='md:hidden absolute top-3 left-[90%] transition-all duration-300'
            onClick={() => {
              setShowMenu(!showMenu);
              setToggleIcon(!toggleIcon);
            }}
          />

        ) : (
          <MdClose size={32} color="white" className='md:hidden absolute top-6 left-[90%] transition-all duration-300'
            onClick={() => {
              setShowMenu(!showMenu);
              setToggleIcon(!toggleIcon);
            }} />

        )
      }

    </nav>
  )
}

export default Header