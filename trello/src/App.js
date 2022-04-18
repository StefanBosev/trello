import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Board from './components/Board/Board';
import { useState } from 'react';

function App() {
  const [boards, setBoards] = useState([Board])

  function newBoard() {
      setBoards([...boards, Board])
  }

  return (
    <div className="trello">
      <Navbar newBoardFunc={newBoard}/>
      <Board id="board"/>
    </div>
  );
}

export default App;
