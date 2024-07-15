'use client';

import Link from 'next/link';
import styles from './styles.module.css';

export default function Navbar() {
  return (
    <div>
      <div className='bg-transparent pb-6 pt-6 shadow-lg text-white'>
        <div className='flex justify-center'>
          <ul className='navbar flex gap-8'>
            <li>
              <Link className='hover:text-gray-500' href="/pages/home"><span style={{color: 'lightgrey'}}>01.</span> Home</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500' href="/pages/about-me"><span style={{color: 'lightgrey'}}>02.</span> About Me</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500' href="/pages/apps"><span style={{color: 'lightgrey'}}>03.</span> Apps</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500' href="https://www.linkedin.com/in/joshuaromulo/" target="_blank"><span style={{color: 'lightgrey'}}>04.</span> LinkedIn</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500' href="https://github.com/jromulo745" target="_blank"><span style={{color: 'lightgrey'}}>05.</span> GitHub</Link>
            </li>
            <li>
              <Link href="/Joshua Jefson Romulo.pdf" locale={false} target='_blank' className='bg-[#87acec] text-white px-5 py-2 rounded-full hover:bg-[#858583]'>R&#233;sum&#233;</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* --------------------------------- */}
      <div>
        <h1 className={styles.curly} style={{marginTop: '30px', fontSize: '75px', textAlign: 'center'}}>Joshua Jefson Romulo</h1>
      </div>
    </div>
  );
}