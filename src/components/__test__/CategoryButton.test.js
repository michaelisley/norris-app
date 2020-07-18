import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import CategoryButton from './../CategoryButton';

it("renders button properly", () => {
    const {getByTestId} = render(<CategoryButton category="animal"></CategoryButton>)
    expect(getByTestId('button')).toHaveTextContent("animal");
})

it("matches the snapshot", () => {
    const tree = TestRenderer.create(<CategoryButton category="religion"></CategoryButton>).toJSON();
    expect(tree).toMatchSnapshot();
})