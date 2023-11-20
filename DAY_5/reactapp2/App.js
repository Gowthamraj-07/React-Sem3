
import './App.css';
import TestOne from './component/TestOne';
import TestTwo from './component/TestTwo';
import TestThree from './component/TestThree';
import Errorboundary from './component/Errorboundary';
function App() {
  return (
    <div className="App">
      <Errorboundary>
        <TestOne/>
      </Errorboundary>
      <Errorboundary>
        <TestTwo/>
      </Errorboundary>
      <Errorboundary>
        <TestThree/>
      </Errorboundary>
    </div>
  );
}

export default App;
