import React, { useState } from 'react';
import './Board.scss';
import Column from '../Column/Column';

const Board = (props) => {
    const [components, setComponents] = useState([Column])

    function addColumn() {
        setComponents([...components, Column])
    }
    return (
        <div id="cardHolder" className="board">
            {components.map((item, i) => (<Column />))}
        <button id="addButton" className="add-column-button" onClick={addColumn}>+ Add another list</button>
        </div>
    );
    
}

export default Board;