import React from 'react';
import Greeting from './components/Greeting';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {window.localStorage.userName ? <Main /> : <Greeting />}
    </div>
  );
}

export default App;
