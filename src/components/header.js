import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav id="header-nav">
                <div id="logo">
                    <img src="https://www.outsourcetopk.com/public/assets/images/portfolio/logo/Shoes-4.jpg" alt="logo" />
                </div>
                <div id="mobile-header-menu">
                    <ul>
                        <li><Link to="/">Shoes</Link></li>
                        <li><Link to="/t-shirts">T-Shirts</Link></li>
                        <li><Link to="/hoodies">Hoodies</Link></li>
                    </ul>
                </div>
                <div id="desktop-header-menu">
                    <ul>
                        <li><Link to="/">Shoes</Link></li>
                        <li><Link to="/t-shirts">T-Shirts</Link></li>
                        <li><Link to="/hoodies">Hoodies</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;