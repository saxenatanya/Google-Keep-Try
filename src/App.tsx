import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {BrowserRouter} from 'react-router-dom';
import {Notes} from "./components/Notes/Notes";


function App() {

  return (
      <BrowserRouter>
          <div className="App">
              <Header />
                <div>
                    <Notes/>
                </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
