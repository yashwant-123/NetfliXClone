import logo from './logo.svg';
import './App.css';
import './Components/nav/Nav';
import Nav from './Components/nav/Nav';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import axios from 'axios';

axios.defaults.baseURL =" https://api.themoviedb.org/3";
axios.defaults.params ={
  api_key : 'ebae4c4e34d5b632ba7f3e959bf339cb',
};

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
