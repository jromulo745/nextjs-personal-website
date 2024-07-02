import Navbar from "../../components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="backdrop-blur-md border rounded-3xl m-20 p-10 max-w-3xl">
          <h1 className="text-3xl">Joshua Jefson Romulo</h1>
          <p className="mt-5">Hello! My name is Joshua Jefson Romulo, and this is my personal website, programmed from the ground up using NextJS. I'm a computer science graduate with work experience in an IT setting, and some of my interests include web development, creating & producing music, and video games. Cheers!</p>
        </div>
      </div>
    </div>
  );
}