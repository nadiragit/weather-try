//import logo from './logo.svg';
import "./App.css";
import WeatherSearch from "./WeatherSearch";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />

        <a
          className="App-link"
          href="https://github.com/nadiragit/weather-try"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source on github
        </a>
      </header>
    </div>
  );
}

export default App;
