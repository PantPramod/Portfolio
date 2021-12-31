import { useState } from 'react';
import Header from './Component/Header';
import Content from './Component/Content';
import './App.css';
import Skills from './Component/Skills';
import Resume from './Component/Resume';
function App() {
  const [showResume, setShowResume] = useState(false);
  return (
    <div className="app">
      {showResume && <Resume Onclose={() => setShowResume(false)} />}
      {!showResume && <>
        <Header />
        <Content showResume={() => setShowResume(true)} />
        <h3 className="skillheading">Skills</h3>
        <Skills /></>}

    </div>
  );
}

export default App;
