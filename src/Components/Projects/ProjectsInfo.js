import portada from "../../assests/img/laptop-portada.png";
import tigerPicture from "../../assests/img/tigerPicture.jpg";
import videogameApp from "../../assests/img/videogameApp.jpg";
import plaremove from "../../assests/img/plaremove.png";
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
    title: "PokemonApp",
    link: "https://github.com/marcospla02/PokemonApp",
    image: portada,
    description: `Project realized to practice new technologies and keep growing!
      In the page you can add to favorites (logged in or not) and log in, if you had favorites in your account they will be loaded together with the new ones you added. 
      You can search the Pokemon by name and soon there will be filtered. 
    `,
  },
  {
    id: 3,
    title: "Plaremove.bg",
    link: "https://plaremove-bg.vercel.app/",
    image: plaremove,
    description: `This project is to remove the backgrounds of the images, I made it with Svelte, TailwindCss and Typescript.
    `,
  },
  {
    id: 4,
    title: "VideogamesApp",
    link: "https://videogame-app-xi.vercel.app/",
    image: videogameApp,
    description:
      "It`s my first app that I created in the stage of individual project in Henry. the technologies that I use is: React, redux,nodejs, javascript, express, postrgreSql and sequelize",
  },
  {
    id: 5,
    title: "Joma.pallets",
    link: "https://www.instagram.com/joma.pallets/",
    image: coding,
    description:
      "Project freelance for a e-commerce (in progress). Instagram: @joma.pallets",
  },
];

export default PorjectsInfo;
