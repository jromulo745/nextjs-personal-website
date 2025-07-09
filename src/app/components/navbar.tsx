'use client';

import Link from 'next/link';
import styles from './styles.module.css';
import '../../app/globals.css';

let doOpen = false;

function toggleMenu() {
  doOpen = !doOpen;
  if (doOpen == true) {
    document.getElementById('navbar')!.style.display = 'flex';
  }
  else if (doOpen == false) {
    document.getElementById('navbar')!.style.display = 'none';
  }
}

export default function Navbar() {
  return (
    <div>
      <div className='pb-6 pt-6 shadow-lg text-white fixed w-full top-0 left-0' style={{backgroundColor: "#a6c1ee", zIndex: '1', textAlign: 'center'}}>
        <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => toggleMenu()}><img src="/images/hamburger.png" style={{width: "31px", height: "31px"}} id="navbar-button"/></button>
        <div className='flex justify-center'>
          <ul className='navbar flex gap-8' id="navbar">
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
              <Link href="/resume_joshua_romulo.pdf" locale={false} target='_blank' className='bg-[#87acec] text-white px-5 py-2 rounded-full hover:bg-[#858583]'>R&#233;sum&#233;</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className={`${styles.curly} ${'header-name'}`} style={{marginTop: '100px', textAlign: 'center'}}>Joshua Jefson Romulo</h1>
      </div>
    </div>
  );
}