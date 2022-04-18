import './Navbar.scss'

const Navbar = (props) => {
    return (
        <nav className="app-navbar">
            <h1 id="app-name">Trello</h1>
            <button className="nav-button">Boards</button>
            <button className="nav-button" onClick={props.newBoardFunc}>Create</button>
        </nav>
    );
}

export default Navbar;