import {useEffect, useState} from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from  "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Veg = () => {
  const [veg, setVeg] = useState([]);

  useEffect (() => {
      getVeg ();
  }, []);

const getVeg   = async () => {

  const check =localStorage.getItem('veg');

  if (check) {
    setVeg(JSON.parse(check))
  } else {
    const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=9eb9d0e95a03473ca8689db07ab5b738&number=12&tags=vegetarian`);
    const data = await api.json();

    localStorage.setItem('veg',JSON.stringify(data.recipes));
    
    setVeg(data.recipes);
    console.log (data.recipes);
  }
   };
  
  return (
    <div>
         <Wrapper>
          <h3>Trending Vegetarian Dishes</h3>
          <Splide options={{
            perPage: 3,
            arrows: true,
            pagination: true, 
            drag: 'free',
            snap: true,
            gap: '5rem',
          }}>
          {veg.map ((recipe) => {
            return (
          
              <SplideSlide key = {recipe.id}>
              <Card>
                <Link to={'/recipe/'+recipe.id}>
                <p> {recipe.title}</p>
                <img src={recipe.image} alt = {recipe.title}/>
                <Gradient/>
                </Link>
              </Card>
              </SplideSlide>
              );
          })}
          </Splide>

         </Wrapper>
    </div>
  )
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
p  {
  position: absolute;
  z-index:10;
  left:5%;
  right:5%;
  bottom:0%;
  transform: translate (-50%, 0%);
  color: black;
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
export default Veg
