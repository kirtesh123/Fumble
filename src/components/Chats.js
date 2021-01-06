import React from 'react';
import "../styles/Chats.css";
import Chat from "./Chat";

const Chats = (props) => {
    
    const { swipeCheck } = props;

    return (
        <div className="chats">
            <h1 className="matches">Your Matches</h1>
            {
                swipeCheck.map( (element, index) => {
                    return (<Chat name={element.recipe.label} profilePic={element.recipe.image} id={index} />)
                })
            }
        </div>
    )
}

export default Chats
