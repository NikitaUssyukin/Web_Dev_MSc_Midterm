import { Link } from "react-router-dom";
import Musk from "./assets/elon-musk-smoking-png-free-image-png-78251.png";

export const Header = () => {
    return (
        <header>
            <hr />
            <div>Midterm Project</div>
            <hr />
            <img src={Musk} alt="Logo" className="header-logo" />  {/* Add your image */}
            <hr />
            <Link to="/">HOME</Link> | <Link to="/bio">BIO</Link> 
            <hr />
        </header>
    );
}