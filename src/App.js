import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Form from "./components/Form";
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
  const [swipeCheck, setSwipeCheck] = useState([]);
  const [choice, setChoice] = useState("");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/home">
            <Header/>
            <TinderCards swipeCheck={swipeCheck} setSwipeCheck={setSwipeCheck}  choice={choice}/>
            <SwipeButtons />
          </Route>
          <Route path="/chat/:id">
            <Header backButton="/chat"/>
            <ChatScreen swipeCheck={swipeCheck}/>
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Chats swipeCheck={swipeCheck}/>
          </Route>
          <Route exact path="/" >
            <Header />
            <Form choice={choice} setChoice={setChoice}/>
          </Route>
          
        </Switch>
      </Router>
      <div className="sourcebtn">
        <Button variant="outlined" color="secondary" href="https://github.com/kirtesh123/Fumble">Source Code <GitHubIcon className="giticon"/></Button>
      </div>
    </div>
  );
}

export default App;
