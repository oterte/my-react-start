import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import LifeCycle from './components/LifeCycle';
import Compositon from './components/props/Compositon';
import Extraction from './components/props/Extraction';
function App() {
  return (
    <div className="App">
      <LifeCycle />
      {/* <ClassComponent />
      <FunctionalComponent/>
      <Compositon name="Sara"/>
      <Compositon name="Park"/>
      <Compositon name="Choi"/>
      <Compositon name="Kyle"/>

      <Extraction /> */}
    </div>
  );
}

export default App;
