import React, {useState, useEffect} from 'react';
import "../styles/ChatScreen.css";
import { Avatar, CircularProgress } from '@material-ui/core';
import {getCurrentDate} from '../utils/date';
import { useParams } from 'react-router-dom';

const ChatScreen = (props) => {

    const { swipeCheck } = props;
    let { id } = useParams();
    const [input, setInput] = useState('');
    const [rec] = useState(swipeCheck);
    const hLabels = swipeCheck[id].recipe.healthLabels;
    const ingredients = [];

    swipeCheck[id].recipe.ingredients.map( (ingredient) => {
        ingredients.push(ingredient.text);
        return undefined;
    })

    const [messages, setMessages] = useState([
        {
            name: `${swipeCheck[id].recipe.name}`,
            cal: `${swipeCheck[id].recipe.calories}`,
            image: `${swipeCheck[id].recipe.image}`,
            ingred: ingredients,
            perks: hLabels,
        }
    ])

    useEffect(() => {
        console.log(messages);
        console.log(messages[0].ingred);
    })
    

    const handleSend = e => { 
        e.preventDefault();
        if (input !== "") {
            setMessages([...messages, {message: input}]);
            setInput("");
        }
    }


    return (
        <div className="chatScreen">
            {rec[id] ? (<p className="chatScreen__timestamp">YOU MATCHED WITH {rec[id].recipe.label} ON {getCurrentDate()}</p>) : (<CircularProgress />)}
            <div className="fix">
            {
                messages.map (message => (
                    message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen_image"
                            
                            src={message.image}
                        />
                        <div className="list" >
                            <p className="chatScreen__text"><b>Calories: </b>{message.cal}</p>
                            <br></br>
                            <p className="chatScreen__text"><b>Ingredients</b></p>
                            {
                                messages[0].ingred.map ( (i) => { 
                                    return (
                                        <div>
                                            <p className="chatScreen__text">-{i}</p>
                                        </div>
                                    )
                                })
                                
                            }
                            <br></br>
                            <p className="chatScreen__text"><b>Perks</b></p>
                            {
                                messages[0].perks.map ( (perk) => {
                                    return (
                                        <div>
                                            <p className="chatScreen__text">-{perk}</p>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>

                    </div>
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
                    
                ))
            }
            </div>

            <form className="chatScreen__input">
                <input className="chatScreen__inputField" value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message..."/>
                <button className="chatScreen__inputButton" onClick={handleSend}>SEND</button>
            </form>
            
        </div>
    )
}

export default ChatScreen;
