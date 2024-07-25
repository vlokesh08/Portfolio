import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProfileMenu from "./components/ProfileMenu";
import NewAbout from "./components/NewAbout";
import NewHero from "./components/NewHero";
import { Route, Routes } from "react-router-dom";
import ProjectReview from "./components/pages/ProjectReview";
import Learnings from "./components/pages/learnings/Learnings";
import AllProjectsPreview from "./components/AllProjectsPreview";
import Blog from "./components/pages/Blog/Blog";
import Snapbuy from "./Projects/Snapbuy";
import MedicinalPlantsClassification from "./Projects/MedicinalPlantsClassifications";
import SimpleChat from "./Projects/SimpleChat";
import HelpPro from "./Projects/HelpPro";
import GoogleAuthentication from "./Projects/GoogleAuthentication";
function App() {
  return (
    <>
      <div className=" dark:bg-darkbg">
        <Navbar />
      </div>
      <main className="dark:bg-darkbg">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learnings" element={<Learnings />} />
          <Route path="/project/:id" element={<ProjectReview />} />
          <Route path="/project/Snapbuy" element={<Snapbuy />} />
          <Route path="/project/SimpleChat" element={<SimpleChat />} />
          <Route path="/project/HelpPro" element={<HelpPro />} />
          <Route path="/project/GoogleAuthentication" element={<GoogleAuthentication />} />
          <Route path="/project/MedicinalPlantsClassification" element={<MedicinalPlantsClassification />} />
          <Route path="/projects" element={<AllProjectsPreview />} />
          <Route path="/learnings/:id" element={<Blog />} />
        </Routes>

        <div>

          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
