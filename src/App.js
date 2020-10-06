import React, { useEffect,useState } from 'react';
import {RecipeTabloid} from './RecipeTabloid';
import './App.css';

function App() {

  const APP_ID = '157b2e85';
  const APP_KEY = '6b1f8f3917d2c99afb659c9682ee6f56';

  const[recipes,setRecipes] = useState([]);
  const[searchValue,setSearchValue] = useState('');
  const[searchQuery,setSearchQuery] = useState('chicken');

  useEffect(()=>{
    console.log('use Effect has been run');
    getSearch();
  },[searchQuery]);

  function getSearch(){
    fetch(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(async fetch_result =>{
      var result =await fetch_result.json();
      setRecipes(result.hits);
      console.log("The results have been",result.hits);
    })
  };

  const updateSearchValue = (e) =>{
    setSearchValue(e.target.value);
    console.log(e.target.value);
  }

  const formSubmit = (e) =>{
    e.preventDefault();
    setSearchQuery(searchValue);
    console.log('searchvalue set to:',searchValue);
    setSearchValue("");
  }

  return (
    <div className="App">
      <div className="search_box">
        <form onSubmit={formSubmit} > 
          <input type="text" value={searchValue} onChange={updateSearchValue}/>
          <button>Search</button>
        </form>
      </div>
      <div className="recipes_display_container">
        {recipes.map(recipe => (
          <RecipeTabloid
          key={recipe.recipe.uri}
          label={recipe.recipe.label}
          ingredients = {recipe.recipe.ingredients}
          image = {recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
