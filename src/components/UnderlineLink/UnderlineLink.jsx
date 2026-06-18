import { Link } from "react-router-dom";
import "./UnderlineLink.css"; // Importe o CSS

const UnderlineLink = ({ to, children, direction = "left-to-right", othersClass }) => {
    return (
        <Link to={to} className={`underline-link ${direction} ${othersClass}`}>
            {children}
        </Link>
    );
};

export default UnderlineLink;
