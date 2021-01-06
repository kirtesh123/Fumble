import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import database from "../firebase";
import "../styles/TinderCards.css";
import axios from "axios";

import {  useSelector } from "react-redux";


const TinderCards = (props) => {

    const {swipeCheck} = props;
    const choice = useSelector((state) => state.choice.choice);

    const APP_ID = "e771d6d4";
    const APP_KEY = "e99291bf372c1ddf5ab4f8f328cd019c";
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, [])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${choice}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits);
        console.log(data.hits);
    }

    let counter = recipes.length - 1;

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction);
            if (direction === 'right') {
                swipeCheck.push(recipes[counter]);
            console.log(swipeCheck);
        }
        counter -= 1;
    }

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {recipes.map(recipe =>  (
                    <TinderCard className="swipe" onSwipe={onSwipe}  preventSwipe={['up', 'down']}>
                        <div className="card" style={{backgroundImage: `url(${recipe.recipe.image})`}}>
                            <h3>{recipe.recipe.label}</h3>
                        </div>         
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;
