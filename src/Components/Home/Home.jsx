import React from "react";
import Nav from "../Nav/Nav";
import { Me, AboutMe, Title, MyPicture, Icons, Cv } from "./HomeStyled";
// import Picture from "../../assests/img/picture2.jpg";
import Picture from "../../assests/img/sinfondo-remove.png";
import cvEnglish from "../../assests/Resume-Marcos-Pla-Señorans.pdf";
import imgCv from "../../assests/img/cv.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  return (
    <div>
      <Nav />
      <Me>
        <Title>
          <h2>Marcos Pla Señorans</h2>
          <h3>Full Stack Developer</h3>
        </Title>
        <AboutMe>
          Hi, I have experience working in NodeJs, React, Redux, SQL,
          postgresSQL, Sequelize, mongoDb, Mongoose, Css, Html among other
          technologies.
        </AboutMe>
      </Me>
      <MyPicture>
        <img
          // src="https://res.cloudinary.com/marcos02/image/upload/e_background_removal/picture2_amyjoi?_a=ATFGlAA0"
          src={Picture}
          alt="my cv"
          width="250px"
          data-aos="flip-down"
          data-aos-duration="3000"
        />
      </MyPicture>
      <Icons>
        <div className="div1">
          <a
            href="https://github.com/marcospla02"
            title="github"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="40px"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
        </div>
        <div className="div1">
          <a
            href="https://www.linkedin.com/in/marcos-pla/"
            title="linkedin"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="40px"
            >
              <path d="M 416 32 H 31.9 C 14.3 32 0 46.5 0 64.3 v 383.4 C 0 465.5 14.3 480 31.9 480 H 416 c 17.6 0 32 -14.5 32 -32.3 V 64.3 c 0 -17.8 -14.4 -32.3 -32 -32.3 Z M 135.4 416 H 69 V 202.2 h 66.5 V 416 Z m -33.2 -243 c -21.3 0 -38.5 -17.3 -38.5 -38.5 S 80.9 96 102.2 96 c 21.2 0 38.5 17.3 38.5 38.5 c 0 21.3 -17.2 38.5 -38.5 38.5 Z m 282.1 243 h -66.4 V 312 c 0 -24.8 -0.5 -56.7 -34.5 -56.7 c -34.6 0 -39.9 27 -39.9 54.9 V 416 h -66.4 V 202.2 h 63.7 v 29.2 h 0.9 c 8.9 -16.8 30.6 -34.5 62.9 -34.5 c 67.2 0 79.7 44.3 79.7 101.9 V 416 Z"></path>
            </svg>
          </a>
        </div>
        <div className="div1">
          <a href="/Contact" title="mail icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="40px"
            >
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
            </svg>
          </a>
        </div>
      </Icons>
      <Cv>
        <p>Resume</p>
        <a href={cvEnglish} download="Marcos-pla-señorans-cv">
          <img src={imgCv} alt="img of cv" width="40px" />
        </a>
      </Cv>
    </div>
  );
}
AOS.init();

export default Home;
