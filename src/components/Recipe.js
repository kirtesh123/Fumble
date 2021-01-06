import React from 'react';

const Recipe = (props) => {

    const { title, calories, image } = props;
    return (
        <div>
            <h1>Title: {title}</h1>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe;
