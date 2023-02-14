import videogameApp from "../../assests/img/videogameApp.jpg";
import tigerPicture from "../../assests/img/tigerPicture.jpg";
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
    title: "Cooming soon",
    link: "",
    image: coding,
    description:
      "In progress, with technologies like: Typescript, Nextjs, Tailwind.  ",
  },
];

export default PorjectsInfo;
