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
      <FillIn file_path={"/software-dev/fill-in.json"} />
      {/* ---------------------------------------------------------- */}
      <ExamAlerts file_path={"/software-dev/exam_alerts.json"}></ExamAlerts>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

// ---------------------------------------------------------------------