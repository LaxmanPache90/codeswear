
import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <>
      <div className='flex flex-col justify-center md:flex-row md:justify-start  items-center py-3 px-3'>
        <div className="logo mx-5 font-mono text-4xl text-pink-400 font-bold">Codeswear</div>
        <div className="nav">
          <ul className='flex space-x-5 font-bold md:text-xl'>
            <li>  <Link href={"/"}>   Tshurts </Link></li>
            <li><Link href="/">  Hoodies</Link></li>
            <li>  <Link href="/">   Stickers </Link></li>
            <li> <Link href="/">   Mugs    </Link></li>

          </ul>
        </div>
        <div className="cart absolute top-4 right-0 mx-5">
          <AiOutlineShoppingCart className= 'text-xl md:text-4xl'/>
        </div>
      </div>
    </>
  )
}

export default Navbar