'use client';

import Link from 'next/link';
import Navbar from "../../components/navbar";
import SquareAnimations from '../../components/square-animations';

export default function AppPage() {
  return (
    <div>
      <Navbar />
      {/* ----------------------------------------------------------------- */}
      <div className="flex justify-center">
        <div className="backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mb-10 mt-10 p-10 max-w-3xl">
          <h1 className="text-3xl" style={{color: 'grey'}}>CompTIA Testing (220-1101)</h1>
          <p className="mt-5 mb-5">Click the start button to open a cluster of testing components used as a study aid to prepare for the CompTIA 220-1101 certification exam.</p>
          <Link className="border rounded-2xl p-2.5 hover:shadow-lg" style={{color: '#6E717A', borderColor: 'grey'}} href="/pages/apps/220-1101">Start</Link>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}
      <div className="flex justify-center">
        <div className="backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mb-20 p-10 max-w-3xl">
          <h1 className="text-3xl" style={{color: 'grey'}}>CompTIA Testing (220-1102)</h1>
          <p className="mt-5 mb-5">Click the start button to open a cluster of testing components used as a study aid to prepare for the CompTIA 220-1102 certification exam.</p>
          <Link className="border rounded-2xl p-2.5 hover:shadow-lg" style={{color: '#6E717A', borderColor: 'grey'}} href="/pages/apps/220-1102">Start</Link>
        </div>
      </div>
      {/* ----------------------------------------------------------------- */}
      
    </div>
  );
}