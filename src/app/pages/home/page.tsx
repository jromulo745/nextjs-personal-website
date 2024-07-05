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
      <div className={styles.boxes}>  
        <div className={styles.container}>
          <div className={styles.box}>
            <h2>About Me</h2>
            <img src='/images/photo.png' width="127" height="169" style={{borderRadius: '10px'}}  />
            <p>Please click this box to view more information about me</p>
          </div>
  
          <a className={styles.box} href="https://github.com/jromulo745" target="_blank">
            <h2>GitHub</h2>
            <img width="159" height="162" style={{marginBottom: '26px'}} />
            <p>Check out my GitHub!</p>
          </a>
  
          <a className={styles.box} href="https://www.linkedin.com/in/joshua-jefson-romulo-5358581b5" target="_blank">
            <h2>LinkedIn</h2>
            <img width="201" height="170" />
            <p>Connect with me on LinkedIn!</p>
          </a>
        </div>
      </div>
      {/* ------------------------------------------------------------------- */}

    </div>
  );
}