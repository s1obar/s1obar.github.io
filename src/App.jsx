import styles from "./App.module.css"
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TimelineExperience from "./components/Timeline/TimelineExperience";

function App() {
  return (
  <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <TimelineExperience/>
    <About/>
  </div>
)}

export default App;