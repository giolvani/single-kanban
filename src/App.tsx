import { ChallengeComponent } from "./components/ChallengeComponent";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-inner">
          <h1>Welcome To The Every.io Code Challenge.</h1>
          <div className="prototype-container">
            <a
              target="_blank"
              href="https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1"
              className="prototype-button"
              rel="noreferrer"
            >
              Checkout the Prototype
            </a>
          </div>
        </div>
      </header>
      <main>
        <ChallengeComponent />
      </main>
    </div>
  );
}

export default App;
