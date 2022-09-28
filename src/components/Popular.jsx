import {useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from  "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


const myApiKey = '2929bb1566fe42468ca71edd961145f4'

function Popular () {
    const [popular, setPopular] = useState([]);

  useEffect (() => {
      getPopular ();
  }, []);

const getPopular   = async () => {
    const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=2929bb1566fe42468ca71edd961145f4&number=12`)
    const data = await api.json();
    console.log (data)
    setPopular(data.recipes);
   }
  
  return (
    <div>
         <Wrapper>
          <h3>Popular Picks</h3>
          <Splide options={{
            perPage: 3,
            arrows: true,
            pagination: true, 
            drag: 'free',
            snap: true,
            gap: '5rem',
          }}>
          {popular.map ((recipe) => {
            return (
              //FIX KEY'S FOR EACH RECIPE
              <SplideSlide>
              <Card key = {recipe.id}>
                <p> {recipe.title}</p>
                <img src={recipe.img} alt = {recipe.title}/>
                <Gradient/>
              </Card>
              </SplideSlide>
              );
          })}
          </Splide>

         </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
margin: 4 rem 0rem;
`;

const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
positon:relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width:100%;
  height:100%;
  object-fit: cover;

}
p  {
  position: absolute;
  z-index:10;
  left:5-%;
  bottom:0%;
  transform: translate (-50%, 0%);
  color: white;
  width:100%;
  text-align:centre;
  font-weight: 600;
  font-size: 1rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;
}

`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba (0,0,0,0), rgba (0,0,0,0.5))
`;

export default Popular