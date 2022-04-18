import './Column.scss'

const Column = (props) => {
    return (
        <div className="column">
          <header>Heading</header>
          <ul className="item-holder"></ul>
          <footer>add item</footer>
        </div>
    );
}

export default Column;