import Navbar from "../../components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      {/* ------------------------------------------------ */}
      <div className="flex justify-center">
        <div className="backdrop-blur-md border shadow-lg rounded-3xl ml-20 mr-20 mt-10 p-10 max-w-3xl">
          <h2 className="flex justify-center text-3xl mb-5" style={{color: '#9B9EAE'}}>IT | Software Developer</h2>
          <p className="mt-5" style={{color: '#6E717A'}}>Hello! My name is Joshua Jefson Romulo, and this is my personal website, programmed from the ground up using NextJS. I'm a computer science graduate with work experience in an IT setting, and some of my interests include web development, creating & producing music, and video games. Cheers!</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="backdrop-blur-md border shadow-lg rounded-3xl ml-10 mr-10 mb-20 mt-10 p-10 max-w-3xl">
          <h1 style={{textAlign: 'center', fontSize: '30px'}}>Work Photo</h1>
          <img src="/photo.png" width="127" height="169" style={{borderRadius: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}></img>
        </div>
      </div>

    </div>
  );
}