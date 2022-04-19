
import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <>
      <div className='flex flex-col justify-center md:flex-row md:justify-start  items-center py-3 px-3 mb-2 shadow-md'>
      <Link href="/">
        <a className="logo mx-5 font-mono text-4xl text-pink-400 font-bold" >Codeswear</a>
      </Link>
    
      {/* className="logo mx-5 font-mono text-4xl text-pink-400 font-bold" */}
        <div className="nav">
          <ul className='flex space-x-5 font-bold md:text-md'>
            <li>  <Link href={"/tshirts"}>   Tshurts </Link></li>
            <li><Link href="/hoodies">Hoodies</Link></li>
            <li>  <Link href="/stickers"> Stickers </Link></li>
            <li> <Link href="/mugs"> Mugs  </Link></li>
          </ul>
        </div>
        <div className="cart absolute top-4 right-0 mx-5">
          <AiOutlineShoppingCart className='text-xl md:text-4xl' />
        </div>
      </div>
    </>
  )
}

export default Navbar