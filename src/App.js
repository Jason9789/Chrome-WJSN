import './App.css';
import Greeting from './components/Greeting';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <header>😃</header>
      {window.localStorage.userName ? <Main /> : <Greeting />}
    </div>
  );
}

export default App;
