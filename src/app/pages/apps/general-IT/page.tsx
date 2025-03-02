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
      <MultipleChoice file_path_1={"/general-IT/multiple-choice.json"} file_path_2={"/220-1102/multiple-choice-explanations.json"} />
      {/* ---------------------------------------------------------- */}
      <FillIn file_path={"/general-IT/fill-in.json"} />
      {/* ---------------------------------------------------------- */}
      <ExamAlerts file_path={"/general-IT/exam_alerts.json"}></ExamAlerts>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

// ---------------------------------------------------------------------