import Navbar from "../../components/navbar";

export default function AboutMePage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="backdrop-blur-md border rounded-3xl ml-20 mr-20 mb-20 mt-10 p-10 max-w-3xl">
          <h1 className="text-4xl mb-5">About me: Joshua Jefson Romulo</h1>
          <h2 className="text-3xl mb-5">IT | Software Developer</h2>
          <p className="mt-5" style={{color: '#6E717A'}}>Hello! My name is Joshua Jefson Romulo, d this is my personal website, programmed from the ground up using NextJS. I'm a computer science graduate with work experience in an IT setting, and some of my interests include web development, creating & producing music, and video games. Cheers!</p>
        </div>
      </div>
    </div>
  );
}