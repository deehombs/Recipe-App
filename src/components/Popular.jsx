import {useEffect, useState} from "react"

function Popular () {
    const [popular, setPopular] =useState([]);

  useEffect (() => {
      getPopular ();
  }, []);

const getPopular   = async () => {
    const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_APP_API_Key}&number=9`)
    const data = await api.json();
    console.log (data)
    setPopular(data.recipes)
   }

  return (
    {popular.map ((recipe) => {
      return (
         <div key = {recipe.id}>
          <p>{recipe.title}</p>
        </div>
      );
    })}
  )
}

export default Popular