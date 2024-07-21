'use client';

import Navbar from "../../components/navbar";
import Link from 'next/link';
import SquareAnimations from '../../components/square-animations';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      {/* ------------------------------------------------ */}
      <div className="flex justify-center">
        <div className="backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mt-10 p-10 max-w-3xl introduction">
          <h2 className="flex justify-center text-3xl mb-5" style={{color: '#9B9EAE'}}>IT | Software Developer</h2>
          <p className="mt-5" style={{color: '#6E717A'}}>Hello! My name is Joshua Jefson Romulo, and this is my portfolio website, programmed  using NextJS. I'm a computer science graduate with work experience in IT, and some of my interests include web development, music production, and film appreciation. Cheers!</p>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      <div className="flex justify-center">
        <div className="flex ml-20 mr-20 mt-5 mb-5 boxes" style={{justifyContent: 'around', gap: '15px', maxWidth: '768px'}}>
          
          <Link href="/pages/about-me" className="backdrop-blur-md border shadow-lg rounded-xl pl-10 pr-10 pt-5 pb-5 min-w-0 min-h-0 overflow-hidden flex flex-col hover:shadow-2xl box1" style={{alignItems: 'center', flex: '1'}}>
            <h2 className="flex justify-center">About Me</h2>
            <img src="/images/photo.png" width="127" height="169" className="border rounded-xl" style={{marginTop: '10px', marginBottom: '10px'}}></img>
            <p>Click here to view more information about me</p>
          </Link>
   
          <Link href="https://github.com/jromulo745" target="_blank" className="backdrop-blur-md border shadow-lg rounded-xl pl-10 pr-10 pt-5 pb-5 min-w-0 min-h-0 overflow-hidden flex flex-col hover:shadow-2xl box2" style={{alignItems: 'center', flex: '1'}}>
            <h2 className="flex justify-center">GitHub</h2>
            <img src="/images/github-mark.png" width="159" height="162" style={{marginTop: '10px', marginBottom: '20px'}}></img>
            <p>Check out my GitHub!</p>
          </Link>
          
          <Link href="https://www.linkedin.com/in/joshuaromulo/" target="_blank" className="backdrop-blur-md border shadow-lg rounded-xl pl-10 pr-10 pt-5 pb-5 min-w-0 min-h-0 overflow-hidden flex flex-col hover:shadow-2xl box3" style={{alignItems: 'center', flex: '1'}}>
            <h2 className="flex justify-center">LinkedIn</h2>
            <img  src="/images/LI-In-Bug.png" width="201" height="170" style={{marginTop: '25px', marginBottom: '25px'}}></img>
            <p>Connect with me on LinkedIn!</p>
          </Link>
  
        </div>
      </div>
      {/* ------------------------------------------------------------------- */}
    </div>
  );
}