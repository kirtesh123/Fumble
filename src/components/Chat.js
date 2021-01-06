import React from 'react';
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import "../styles/Chat.css";

const Chat = (props) => {
    
    const { name, profilePic, timestamp, id } = props;
    let history = useHistory();

    const handleOnClick = () => {
        history.push(`/chat/${id}`)
    }

    return (
        // <Link to={`/chat/${id}`} >
        <Button className="row" onClick={handleOnClick} variant="outlined" color="defualt">
            <div className="chat">
                <Avatar className="chat__image" alt={name} src={profilePic} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>Click here to see the ingredients, and nutrition facts, and calorie intake!</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>
            </div>
        </Button>
        
    )
}      

export default Chat;
