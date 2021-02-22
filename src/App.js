import { Route } from 'react-router-dom';
import './App.css';
import { Header } from "./components/Header/Header"
import MainContainer from './components/Main/MainContainer';
import NewColorContianer  from "./components/NewColor/NewColorContianer"

function App() {
  return (
    <div>
      <Header />
      <div className = "container" >
        <Route path = "/" exact render = { () => <MainContainer /> } />
        <Route path = "/new" render = { () => <NewColorContianer /> } />
      </div>
    </div>
  );
}

export default App;
