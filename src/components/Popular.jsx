import {useEffect} from "react"

function Popular () {
  useEffect (() => {
      getPopular ();
  }, []);

const getPopular   = async () => {
    const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_APP_API_Key}&number=9`)
    const date= await api.json();
    console.log (data)


  return (
    <div>Popular</div>
  )
}

export default Popular