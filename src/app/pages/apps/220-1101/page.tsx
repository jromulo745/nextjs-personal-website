'use client';

import { useState } from "react";
import Navbar from "../../../components/navbar";
import MultipleChoice from "./components/multiple-choice";

export default function Page() {
  return (
    <div>
      <Navbar />
      <MultipleChoice />

      {/* ---------------------------------------------------------- */}

      <div className="flex justify-start">
        <div className="backdrop-blur-md border rounded-3xl mt-5 ml-20 p-10 max-w-3xl">
          <h1 className="text-3xl">Fill-In</h1>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------

