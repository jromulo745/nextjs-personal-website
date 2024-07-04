'use client';

import Navbar from "../../../components/navbar";
import MultipleChoice from "./components/multiple-choice";
import FillIn from "./components/fill-in";

export default function Page() {
  return (
    <div>
      <Navbar />
      {/* ---------------------------------------------------------- */}
      <MultipleChoice />
      {/* ---------------------------------------------------------- */}
      <FillIn />
    </div>
  );
}

// ---------------------------------------------------------------------