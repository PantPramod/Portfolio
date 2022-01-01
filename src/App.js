import { useState } from 'react';
import Header from './Component/Header';
import Content from './Component/Content';
import './App.css';
import Skills from './Component/Skills';
import Resume from './Component/Resume';
import Certification from './Component/Certifications';
import Contact from './Component/Contact';
import Projects from './Component/Projects';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [page, setPage] = useState('home');
  let content;
  if (page == 'home') {
    content = <> <Content showResume={() => setShowResume(true)} />
      <h3 className="skillheading">Skills</h3>
      <Skills /></>
  }
  if (page == "achievements") {
    content = <Certification />;
  }
  if (page == "p") {
    content = <Projects />
  }
  if (page == "contact") {
    content = <Contact />;
  }

  return (
    <div className="app">
      {showResume && <Resume Onclose={() => setShowResume(false)} />}
      {!showResume && <>
        <Header SetPage={(i) => setPage(i)} />
        {content}
      </>}

    </div>
  );
}

export default App;
