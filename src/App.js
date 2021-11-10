import logo from './jujNoBack.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          Hello, world!
        </h4>
        <a
          className="App-link"
          href="https://github.com/ebehrens42/ebehrens42-React-Hello-World"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's My Repo
        </a>
      </header>
    </div>
  );
}

export default App;
