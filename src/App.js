import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ProfileMenu from "./components/ProfileMenu";
import NewAbout from './components/NewAbout';
import NewHero from './components/NewHero';
function App() {
  return (
    <>
      <div className="m-6">
      <ProfileMenu  />
      </div>
      <main>
        <NewHero />
        {/* <About /> */}
        <NewAbout />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>

  );
}

export default App;
