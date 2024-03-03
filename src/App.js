import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        {/* curly braces used to "escape" from JSX to JS.
          * "logo" in line 8 is a variable that contains the source for the image that shall be displayed
          * The curly braces around this comment allow this comment to be identified as a comment as opposed to an error
          * Remember: CSS vars shall be surrounded w/ "", JS vars shall be surrounded w/ {} */}

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
