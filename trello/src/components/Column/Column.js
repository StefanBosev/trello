import React, { useState } from 'react';
import './Column.scss'
import Footer from './Footer/Footer';
import Item from '../Item/Item';

const Column = (props) => {
    
    const [items, setItems] = useState([Item])

    function addItem(props) {
        setItems([...items, Item])
    }

    return (
        <div className="column">
          <header>Heading</header>
          <ul className="item-holder">
            {items.map((it, i) => (<Item name={it}/>))}
          </ul>
          <Footer onSubmit={addItem}/>
        </div>
    );
}

export default Column;