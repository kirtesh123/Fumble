import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import "../styles/Form.css";
import GitHubIcon from '@material-ui/icons/GitHub';


import { useDispatch, useSelector } from "react-redux";
import { handleChoice } from "../redux/ducks/choice";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
    margin: {
        margin: theme.spacing(1),
      },
}));

const Form = () => {

    // const { choice, setChoice } = props;
    const choice = useSelector((state) => state.choice.choice);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("you selected:" + value);
        // setChoice(value);
        dispatch(handleChoice(value));

    };
    
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
    };

    return (
        <div>
            <form className="form"onSubmit={handleSubmit}>
            <h3 className="subtitle">What are you craving today?</h3>
            <FormControl component="fieldset" error={error} className={classes.formControl}>
                
                <FormLabel component="legend" className="legends">Select one below ...</FormLabel>
                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                    <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
                    <FormControlLabel value="drink" control={<Radio />} label="Drink" />
                    <FormControlLabel value="cake" control={<Radio />} label="Cake" />
                    <FormControlLabel value="burger" control={<Radio />} label="Burger" />
                    <FormControlLabel value="pasta" control={<Radio />} label="Pasta" />
                    <FormControlLabel value="rice" control={<Radio />} label="Rice" />
                    <FormControlLabel value="salad" control={<Radio />} label="Salad" />
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
                <Button type="submit" variant="contained" color="primary" className={classes.button}>Confirm Choice</Button>
            </FormControl>

            </form>
            <div className="continue" >
            <Link to="/home">
                <Button variant="contained" color="primary" className="greenbutton">Click here to continue</Button>
            </Link>
            </div>
            <div className="sourcebtn">
                <Button variant="outlined" color="secondary" href="https://github.com/kirtesh123/Fumble">Source Code <GitHubIcon className="giticon"/></Button>
            </div>
        </div>
    )
}

export default Form;
