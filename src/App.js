import React, { useEffect, useState } from 'react';
import './App.css';
import Joke from './components/Joke';
import CategoryButton from './components/CategoryButton';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3em;
  color: burlywood;
`;

function App() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(
          (result) => {
              setIsLoaded(true);
              setCategories(
                  result.map((category) => ({
                  name: category,
                  joke: "",
                  isLoaded: false,
                }))
              )
         },
          (error) => {
              setIsLoaded(true);
              setError(error);
          }
      )
  }, [])

  const handleCategoryButtonClick = (category) => {
    setJoke(category, "", false);
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(res => res.json())
      .then(
        (result) => {
            setIsLoaded(true);
            setJoke(category, result.value, true);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
            setJoke(category, error, true);
        }
      )
  }

  const setJoke = (category, joke, jokeIsLoaded = false) => {
    setCategories((prevCategories) =>
      prevCategories.map((cat) =>
        cat.name === category
          ? {
              name: cat.name,
              joke,
              isLoaded: jokeIsLoaded,
            }
          : cat
      )
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loading">Loading categories...</div>;
  } else {
    return (
      <div className="App">
        <Title>Chuck Norris Jokes!</Title>
        <ul>
            {
              categories.map(category => (
                <li key={category.name}>
                    <CategoryButton category={category.name} handleCategoryButtonClick={handleCategoryButtonClick} />
                    <Joke category={category.name} joke={category.joke} isLoaded={category.isLoaded} setJoke={setJoke}/>
                </li>
              ))
            }
        </ul>
      </div>
    );
  }
}

export default App;
