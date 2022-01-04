import { Route,Switch } from 'react-router-dom';
import './App.css';
import Weather from './weather/Weather';
import Weatherser from './weather/WeatherFive';
function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Weather} />
    <Route path="/as" component={Weatherser} />
    
      </Switch>
    
    </>
  );
}

export default App;
