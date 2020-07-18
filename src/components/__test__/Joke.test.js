import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './../Joke';

it("renders joke without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Joke></Joke>, div);
})