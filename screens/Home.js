import React from 'react';
import '../styles/tailwind.css';



const Home =()=>{

    return(
    <div>
      <div className='container mx-auto p-5'>
<div className='md:flex md:flex-row md:justify-between mt-20'>
    <div className='md:w-2/5 flex flex-col justify-center items-center mb-4'>
        <h2 className='font-serif text-4xl text-gray-600 mb-4 text-center md:self-start md:text-left'>Some Catchy Title more</h2>
        <p className='uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left'>our brand tagline goes here</p>
        <p className='uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left'>our brand motto goes here</p>
        <a href="#" className='bg-gradient-to-r from-red-600 to-pink-500 text-gray-50 uppercase 
        rounded-full py-2 px-3 text-center md:self-start mt-5 text-sm '>shop now</a>
    </div>
    <div className='md:w-3/5'>
        <img src={require("../image/hero-img.svg")} className='w-full'/>
    </div>
 </div>{/**hero section */}
 <div className='my-20'>
    <div className='flex flex-row justify-between mb-3'>
        <h1 className='text-3xl'>Men's Collection</h1>
        <a href="" className='text-xl flex flex-row'>view all
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</a></div>
<div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/men/product1.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between '>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>
    </div>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/men/product2.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-2 py-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between'>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>
    </div>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/men/product3.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-2 py-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between'>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>
    </div>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/men/product4.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-2 py-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between'>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>  
    </div>
</div>

</div>{/** men' s collection */}

    
<div className='my-20'>
    <div className='flex flex-row justify-between mb-3'>
        <h1 className='text-3xl'>Women's Collection</h1>
        <a href="" className='text-xl flex flex-row'>view all
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-7 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
</svg>
</a></div>
<div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/women/product1.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between '>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>
    </div>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/women/product2.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-2 py-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between'>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>
    </div>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/women/product3.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-2 py-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between'>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>
    </div>
    <div className='shadow-lg rounde-lg'>
        <a href="">
        <img src={require('../image/women/product4.jpg')} className='rounded-tl-lg rounded-tr-lg'/>
        </a>
        <div className='p-2 py-5'>
           <h3> <a href="">Men's T-shirt</a></h3>
           <div className='flex flex-row my-3'>
            <div className='bg-black w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-white w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-red-800 w-5 h-5 rounded-full shadow-md mr-2'></div>
            <div className='bg-green-700 w-5 h-5 rounded-full shadow-md mr-2'></div>
           </div>
           <div className='flex flex-row my-3'>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>XXL</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>L</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>M</div>
            <div className='border-2 border-gray-300 text-gray-400 rounded-md text-xs px-2 py-1 mr-2'>S</div>
           </div>
           <div className='flex flex-col xl:flex-row justify-between'>
            <a href='#' className='flex flex-row text-sm bg-gradient-to-r from-red-600 to-pink-500 px-1 py-1 rounded-full 
            hover:bg-pink-600 hover:bg-pink-600 justify-center mb-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
            Add to Cart</a>
            <a href='#' className='flex flex-row text-sm bg-purple-600 hover:bg-purple-500 px-1 py-1 rounded-full justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            View Details</a>
           </div>
        </div>






        
    </div>
</div>

</div>{/** women's collection */}
<div className='rounded-lg shadow-lg my-20 flex flex-row'>
    <div className='lg:w-3/5  bg-gradient-to-r from-black to-purple-900 lg:from-black lg:via-purple-900 lg:to-transparent rounded-lg text-gray-100 p-10'>
          <div className='lg:w-1/2'>
            <h3 className='text-2xl font-extrabold mb-4'>Subscribe to get our offer first</h3>
            <p className='mb-3 leading-relaxed'>Want to hear from us when we have new offers? Sign up for our newsletter and we'll email you 
                every time we have new sale offers.
            </p>
            <div>
                <input type='email' placeholder='Enter email address' className='bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-lg
                w-full focus:outline-none mb-4'/>
                <button type='submit' className='bg-red-600 w-full rounded-lg py-3 px-4'>Subscribe</button>
            </div>
          </div>
          
    </div>
    <div className='hidden lg:w-2/5 w-full lg:flex lg:flex-row'>
        <img src={require('../image/subscribe-banner.png')} className='h-90'/>
    </div>
    
</div>{/**Newsletter Section */}
<div className='border-t-2 border-gray-300 flex flex-col lg:flex lg:flex-row lg:justify-between py-2 items-center'>
    <div className='mb-4'>
        <a href='#' className='mx-2.5'>About</a>
        <a href='#' className='mx-2.5'>Privacy Policy</a>
        <a href='#' className='mx-2.5'>Terms of Services</a>
    </div>
    <p className='mb-4'>&copy; Copyright Reserved 2022</p>
</div>{/** Footer section */}
           
</div>

</div>

    )
}
export default Home;