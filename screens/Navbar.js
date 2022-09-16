import React from 'react';
import '../styles/tailwind.css';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div>
           <div className='container mx-auto p-5'>
                <div className='md:flex md:flex-row md:justify-between text-center'>
                <div className='flex flex-row justify-center '>
                    <div className='bg-gradient-to-r from-purple-400 to-red-400 h-10 w-10 rounded-lg'>
                    </div>
                    <h1 className='text-3xl text-gray-600 ml-2'>Logo</h1>
                </div>
                <nav>
                <div className='mt-2'>
                    <Link className='text-gray-600 hover:text-purple-600 p-2' to="/">Home</Link>
                    <Link className='text-gray-600 hover:text-purple-600 p-2' to="/shop">Shop</Link>
                    <Link className='text-gray-600 hover:text-purple-600 p-2' to="/blog">Blog</Link>
                    <Link className='text-gray-600 hover:text-purple-600 p-2' to="/contact">Contact</Link>
             
                    
                    <a href="#" className='bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-5 rounded-full'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
Cart (0)
</a>

</div>
</nav>
</div>
</div>{/**main nav**/}

        </div>
    )
}
export default Navbar;