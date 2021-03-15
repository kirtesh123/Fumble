import React from 'react';
import "../styles/Header.css";   
import { Link, useHistory } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SettingsIcon from '@material-ui/icons/Settings';
import ChatIcon from '@material-ui/icons/Chat';


const Header = (props) => {

    const history = useHistory();
    const { backButton } = props;

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon className="header__icon"  />
                </IconButton>
            ) : (
                <Link to="/" >
                    <IconButton>
                    <SettingsIcon className="header__icon"  />
                    </IconButton>
                </Link>
            )}
            <Link to="/home">
                {/* <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder logo"/> */}
                <h1 className="header__title">CraveCatcher</h1>
            </Link>
            <Link to="/chat">
                <IconButton><ChatIcon className="header__icon chat_icon"  /></IconButton>
            </Link>
        </div>
    )
}

export default Header;
