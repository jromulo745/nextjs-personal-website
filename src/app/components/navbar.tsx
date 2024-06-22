'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
      <div className='bg-transparent pb-6 pt-6 shadow-lg text-white'>
        <div className='flex justify-center items-center w-[92%] mx-auto'>
          <ul className='flex gap-8'>
            <li>
              <Link className='hover:text-gray-500' href="/pages/home">Home</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500' href="/pages/about-me">About Me</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500' href="/pages/apps">Apps</Link>
            </li>
            <li>
            <Link className='hover:text-gray-500' href="https://www.linkedin.com/in/joshuaromulo/" target="_blank">LinkedIn</Link>
            </li>
            <li>
            <Link className='hover:text-gray-500' href="https://github.com/jromulo745" target="_blank">GitHub</Link>
            </li>
          </ul>
          <button style={{marginLeft: 'auto'}} className='bg-[#87acec] text-white px-5 py-2 rounded-full hover:bg-[#858583]'>Admin</button>
        </div>
        {/* ------------------------------ */}
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        {/* ------------------------------ */}
      </div>
  );
}