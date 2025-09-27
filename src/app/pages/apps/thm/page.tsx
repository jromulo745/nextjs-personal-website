'use client';

import Navbar from "../../../components/navbar";
import MultipleChoice from '../../../components/multiple-choice'
import FillIn from "../../../components/fill-in";
import ExamAlerts from "../../../components/exam_alerts"

export default function Page() {
  return (
    <div>
      <Navbar />
      {/* ---------------------------------------------------------- */}
      <MultipleChoice file_path_1={"/thm/multiple-choice.json"} file_path_2={"/thm/multiple-choice-explanations.json"} />
      {/* ---------------------------------------------------------- */}
      <FillIn file_path={"/thm/fill-in.json"} />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

// ---------------------------------------------------------------------