'use client';

import Navbar from "../../../components/navbar";
import FillIn from "../../../components/fill-in";

export default function Page() {
  return (
    <div>
      <Navbar />
      <FillIn file_path={"/port-quiz/fill-in.json"} />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}