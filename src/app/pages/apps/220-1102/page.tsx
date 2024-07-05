'use client';

import Navbar from "../../../components/navbar";
import MultipleChoice from '../../../components/multiple-choice'
import FillIn from "../../../components/fill-in";

export default function Page() {
  return (
    <div>
      <Navbar />
      {/* ---------------------------------------------------------- */}
      <MultipleChoice file_path={"/220-1101/multiple-choice.json"} />
      {/* ---------------------------------------------------------- */}
      <FillIn file_path={"/220-1101/fill-in.json"} />
    </div>
  );
}

// ---------------------------------------------------------------------