import React, { useEffect } from 'react'

export default function Joke(props) {
    const {category, joke, isLoaded, setJoke } = props;
    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res => res.json())
        .then(
            (result) => {
                setJoke(category, result.value, true);
            },
            (error) => {
                setJoke(category, error, true);
            }
        )
    }, [])
    if (!isLoaded) {
        return <div className="loading">Loading joke...</div>;
    } else {
        return (
            <>
                <div className="joke">{joke}</div>
                
            </>
        );
    }
}
