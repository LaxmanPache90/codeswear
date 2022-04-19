
import React,{ useRef} from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart ,AiFillCloseCircle ,AiFillPlusCircle ,AiFillMinusCircle} from 'react-icons/ai';
const Navbar = () => {

  const ref = useRef()
  const toggleCart=()=>{
    if(ref.current.classList.contains('translate-x-full')){
      // alert("Hello")
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else{
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')
    }
  }
  return (
    <>
      <div className='flex flex-col justify-center md:flex-row md:justify-start  items-center py-3 px-3 mb-2 shadow-md'>
      <Link href="/">
        <a className="logo mx-5 font-mono text-4xl text-pink-400 font-bold" >Codeswear</a>
      </Link>
    
      {/* className="logo mx-5 font-mono text-4xl text-pink-400 font-bold" */}
        <div className="nav">
          <ul className='flex space-x-5 font-bold md:text-md'>
            <li>  <Link href={"/tshirts"}>   Tshirts </Link></li>
            <li><Link href="/hoodies">Hoodies</Link></li>
            <li>  <Link href="/stickers"> Stickers </Link></li>
            <li> <Link href="/mugs"> Mugs  </Link></li>
          </ul>
        </div>
        <div onClick={toggleCart} className="cart cursor-pointer absolute top-4 right-0 mx-5">
          <AiOutlineShoppingCart className='text-xl md:text-4xl' />
        </div>
      </div>
      <div ref={ref}  className="sidebar absolute top-2 right-0  w-72 h-full bg-pink-200 p-10 z-10 transform transition-transform translate-x-full">
         <h2 className='text-xl font-bold'>Shopping Cart</h2>
         <span onClick={toggleCart} className="absolute top-2 right-2 text-2xl text-pink-500 cursor-pointer"><AiFillCloseCircle/></span>
         <ol className=' '>
           <li>
             <div className="item flex my-4">
             <div className=' font-bold w-2/3'> 1. T shirt Wear the code</div>
             <div className=' font-bold  flex justify-center items-center w-1/3 '   >  <AiFillPlusCircle className='mx-1 text-xl cursor-pointer text-pink-800' />1 <AiFillMinusCircle  className=' cursor-pointer text-pink-800 mx-1 text-xl'/></div>
             </div>
           </li>
         </ol>
         <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
      </div>
    </>
  )
}

export default Navbar