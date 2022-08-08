import './App.css';
import { Route} from "wouter";
import About from './Pages/About';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio';
import TrackRecord from './Pages/TrackRecord';

function App() {
  return (
    <div className="App-background">

      <Route path="/about" component={About} /> 

      <Route path="/" component={Home} /> 

      <Route path="/portfolio" component={Portfolio} /> 

      <Route path="/trackrecord" component={TrackRecord} /> 
      
    </div>
  );
}

export default App;
