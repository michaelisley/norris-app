import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Joke from './../Joke';
import CategoryButton from './../CategoryButton';

it("renders joke without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Joke></Joke>, div);
})

it("renders button properly", () => {
    const {getByTestId} = render(<CategoryButton category="animal"></CategoryButton>)
    expect(getByTestId('button')).toHaveTextContent("animal");
})

it("matches the snapshot", () => {
    const tree = TestRenderer.create(<CategoryButton category="religion"></CategoryButton>).toJSON();
    expect(tree).toMatchSnapshot();
})