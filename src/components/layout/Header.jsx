import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {
    return (
        <Fragment>
            <header>
                <Container>
                    <nav>
                        <ul className="nav justify-content-between">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/transactions">
                                    Transactions
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/debts">
                                    Debts
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </Fragment>
    );
};

export default Header;
