import videogameApp from "../../assests/img/videogameApp.jpg";
import tigerPicture from "../../assests/img/tigerPicture.jpg";
import pokemonApp from "../../assests/img/pokemonApp.jpg";
import portada from "../../assests/img/portada.png";
import coding from "../../assests/img/codeando.jpeg";

const PorjectsInfo = [
  {
    id: 1,
    title: "tigerCoffe",
    link: "https://tigercoffee.vercel.app/",
    image: tigerPicture,
    description:
      "Poject created groupally (6 people including me) in the stage of the group project of Henry. It's a coffee e-commerce, were people all around the world can choose and buy within a wide variety of coffe, coffe-maker and more",
  },
  {
    id: 2,
    title: "VideogamesApp",
    link: "https://videogame-app-xi.vercel.app/",
    image: videogameApp,
    description:
      "It`s my first app that I created in the stage of individual project in Henry. the technologies that I use is: React, redux,nodejs, javascript, express, postrgreSql and sequelize",
  },
  {
    id: 3,
    title: "PokemonApp",
    link: "https://github.com/marcospla02/PokemonApp",
    image: portada,
    description: `Project realized to practice new technologies and keep growing!
      In the page you can add to favorites (logged in or not) and log in, if you had favorites in your account they will be loaded together with the new ones you added. 
      You can search the Pokemon by name and soon there will be filtered. 
    `,
  },
];

export default PorjectsInfo;
