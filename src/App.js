import logo from './logo.svg';
import './App.css';
import Compositon from './components/props/Compositon';
import Extraction from './components/props/Extraction';
function App() {
  return (
    <div className="App">
      <Compositon name="Sara"/>
      <Compositon name="Park"/>
      <Compositon name="Choi"/>
      <Compositon name="Kyle"/>

      <Extraction />
    </div>
  );
}

export default App;
