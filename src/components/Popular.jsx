import {useEffect, useState} from "react"

const myApiKey = '2929bb1566fe42468ca71edd961145f4'

function Popular () {
    const [popular, setPopular] = useState([]);

  useEffect (() => {
      getPopular ();
  }, []);

const getPopular   = async () => {
    const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=2929bb1566fe42468ca71edd961145f4&number=9`)
    const data = await api.json();
    console.log (data)
    setPopular(data.recipes);
   }
  
  return (
    <div>
    {popular.map ((recipe) => {
      return (
         <div key = {recipe.id}>
          <p>{recipe.title}</p>
        </div>
      );
    })}
    </div>
  );
}

export default Popular