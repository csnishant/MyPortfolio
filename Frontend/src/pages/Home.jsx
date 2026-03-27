import EducationCertifications from "../components/Certifications";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SkillSection from "../components/SkillSection";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <SkillSection />
      <EducationCertifications/>
      <Projects />
      <Contact />
    
    </>
  );
}

export default Home;
