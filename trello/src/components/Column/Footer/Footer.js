import './Footer.scss'

const Footer = (props) => {

    return (
        <footer class="footer-container">
            <form onSubmit={props.onSubmit}>
                <input class="input-field" type="text" placeholder="Add item"></input>
                <button type="submit">Submit</button>
            </form>
        </footer>
    );
}

export default Footer;