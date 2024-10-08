'use client';

import Navbar from "../../../components/navbar";
import MultipleChoice from '../../../components/multiple-choice'
import FillIn from "../../../components/fill-in";

export default function Page() {
  return (
    <div>
      <Navbar />
      {/* ---------------------------------------------------------- */}
      <MultipleChoice file_path_1={"/220-1101/multiple-choice.json"} file_path_2={"/220-1101/multiple-choice-explanations.json"}/>
      {/* ---------------------------------------------------------- */}
      <FillIn file_path={"/220-1101/fill-in.json"} />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

// ---------------------------------------------------------------------