import './App.css';
import { Route} from "wouter";
import About from './Pages/About';
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio';

function App() {
  return (
    <div className="App-background">

      <Route path="/about" component={About} /> 

      <Route path="/" component={Home} /> 

      <Route path="/portfolio" component={Portfolio} /> 
      
    </div>
  );
}

export default App;
