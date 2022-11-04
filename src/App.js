import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='Iphone' price='500$'></Device>
      <Watch />
    </div>
  );
}

export default App;
