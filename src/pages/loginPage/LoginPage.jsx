import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import user from "../../assets/images/user.svg";
import password from "../../assets/images/password.svg";

import "./login.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        navigate("/home");
    };
    return (
        <Fragment>
            <main className="login-main">
                <div className="login-box">
                    <div data-v-40e3ce8c="" className="brand">
                        <div data-v-40e3ce8c="" className="brand-logo router-link-exact-active router-link-active"></div>
                        <div data-v-40e3ce8c="" className="brand-title">
                            Cardmon
                        </div>
                    </div>
                    <form id="formTo" onSubmit={login}>
                        <label className="user-label">
                            <img src={user} alt="user" />
                        </label>
                        <input type="text" id="userTo" className="inputs username" placeholder="username" />
                        <label className="pass-label">
                            <img src={password} alt="password" />
                        </label>
                        <input type="password" id="passwordTo" className="inputs password" placeholder="password" />
                        <button type="submit" className="loginTo">
                            Login
                        </button>
                    </form>
                </div>
            </main>
        </Fragment>
    );
};

export default LoginPage;
