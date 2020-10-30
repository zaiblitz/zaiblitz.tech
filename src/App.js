import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p> zaiblitz.tech </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > 
                    Learn React 
                </a>
            </header> */}

            <TestComponent name="Merwin Dale" />
        </div>
    );
}

export default App;
