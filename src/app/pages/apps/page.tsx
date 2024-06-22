'use client';

import Link from 'next/link';
import Navbar from "../../components/navbar";

export default function AppPage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-start">
        <div className="backdrop-blur-md border rounded-3xl m-20 p-10 max-w-3xl">
          <h1 className="text-3xl">CompTIA Testing</h1>
          <p className="mt-5 mb-5">Click the start button to open a cluster of testing components used as a study aid to prepare for the CompTIA 220-1101 certification exam.</p>
          <Link className="border border-black rounded-2xl p-2.5" href="/pages/apps/220-1101">Start</Link>
        </div>
      </div>
    </div>
  );
}