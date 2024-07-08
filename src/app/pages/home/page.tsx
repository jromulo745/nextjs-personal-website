import Navbar from "../../components/navbar";
import styles from './styles.module.css';

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

      {/* ------------------------------------------------------------------- */}
      <div style={{maxWidth: '768px', margin: '0 auto', padding: '8px 0 0 0'}}>
        <div className="flex mt-5 mb-5" style={{justifyContent: 'around', gap: '15px'}}>
          
          <div className="backdrop-blur-md border shadow-lg rounded-xl pl-10 pr-10 pt-5 pb-5 shrink min-w-0 min-h-0 overflow-hidden flex flex-col" style={{alignItems: 'center', flex: '1'}}>
            <h2 className="flex justify-center">About Me</h2>
            <img style={{marginTop: '25px', marginBottom: 'auto'}} src="/images/photo.png" width="127" height="169" className="mb-2 flex m-auto"></img>
            <p>Click this box to view more information about me</p>
          </div>
   
          <div className="backdrop-blur-md border shadow-lg rounded-xl pl-10 pr-10 pt-5 pb-5 shrink min-w-0 min-h-0 overflow-hidden flex flex-col" style={{alignItems: 'center', flex: '1'}}>
            <h2 className="flex justify-center">GitHub</h2>
            <img style={{marginTop: '25px', marginBottom: 'auto'}} src="/images/github-mark.png" width="159" height="162" className="mb-2 flex m-auto"></img>
            <p>Check out my GitHub!</p>
          </div>
          
          <div className="backdrop-blur-md border shadow-lg rounded-xl pl-10 pr-10 pt-5 pb-5 shrink min-w-0 min-h-0 overflow-hidden flex flex-col" style={{alignItems: 'center', flex: '1'}}>
            <h2 className="flex justify-center">LinkedIn</h2>
            <img style={{marginTop: '25x', marginBottom: 'auto'}} src="/images/LI-In-Bug.png" width="201" height="170" className="mb-2 flex m-auto"></img>
            <p>Connect with me on LinkedIn!</p>
          </div>
    
        </div>
      </div>
      {/* ------------------------------------------------------------------- */}

    </div>
  );
}