import logo from './logo.svg';
import './App.css';
import Introduction from "./Intro";
import Projects from "./Projects";

function App() {
  return (
      <div className="page-container">
          <Introduction />
          <Projects />
      </div>
    )
  ;
}

export default App;
