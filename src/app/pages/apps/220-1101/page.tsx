'use client';

import Navbar from "../../../components/navbar";
import MultipleChoice from '../../../components/multiple-choice'
import FillIn from "../../../components/fill-in";

export default function Page() {
  return (
    <div>
      <Navbar />
      {/* ---------------------------------------------------------- */}
      <MultipleChoice file_path={"/multiple-choice.json"} />
      {/* ---------------------------------------------------------- */}
      <FillIn file_path={"/fill-in.json"} />
    </div>
  );
}

// ---------------------------------------------------------------------