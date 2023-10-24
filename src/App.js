import React, { useEffect } from 'react';

import './App.css';
import Search from './components/Search';
import ZipInfo from './components/ZipInfo';

function App() {
  

  return (
    <div className="App">
      <nav>
        <h1>ZipInfo</h1>
        <Search />
      </nav>
      <main>
        <ZipInfo />
      </main>


    </div>
  );
}

export default App;