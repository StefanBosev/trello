import { useState } from 'react';
import './App.scss';
import Column from './components/Column/Column.js'

function App() {

  const [components, setComponents] = useState([Column])

  function addColumn() {
    setComponents([...components, Column])
  }

  return (
    <div className="trello">
      <nav className="app-navbar">
        Navbar  
      </nav>
      <div id="cardHolder" className="board">
        {components.map((item, i) => (<Column />))}
        <button id="addButton" className="add-column-button" onClick={addColumn}>+ Add another list</button>
      </div>
    </div>
  );
}

export default App;
