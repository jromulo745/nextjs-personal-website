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
      <MultipleChoice file_path_1={"/N10-009/multiple-choice.json"} file_path_2={"/N10-009/multiple-choice-explanations.json"} />
      {/* ---------------------------------------------------------- */}
      <FillIn file_path={"/N10-009/fill-in.json"} />
      {/* ---------------------------------------------------------- */}
      <ExamAlerts file_path={"/N10-009/exam_alerts.json"}></ExamAlerts>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

// ---------------------------------------------------------------------