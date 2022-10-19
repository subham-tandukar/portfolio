import React from "react";
import loader from "../../img/loader.gif";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.png";
import project5 from "../../img/project5.png";
import project6 from "../../img/project6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper";
import { GoGlobe } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

const project = [
  {
    id: 1,
    img: project1,
    web: "https://easysoftware.com.np/",
    git: "https://github.com/subham-tandukar/easy-software",
  },
  {
    id: 2,
    img: project2,
    web: "http://sundevicoop.com/",
    git: "https://github.com/subham-tandukar/cooperative",
  },
  {
    id: 3,
    img: project3,
    web: "https://subham-tandukar.github.io/ecommerce/",
    git: "https://github.com/subham-tandukar/ecommerce",
  },
  {
    id: 4,
    img: project4,
    web: "http://hamichhimeki.com/",
    git: "https://github.com/subham-tandukar/landing-page",
  },
  {
    id: 5,
    img: project5,
    web: "http://taprizaschool.org/",
    git: "https://github.com/subham-tandukar/Tapriza-School",
  },
  {
    id: 6,
    img: project6,
    web: "https://tashi-d.org/",
    git: "https://github.com/subham-tandukar/NGO",
  },
];

const Section4 = () => {
  return (
    <>
      <div className="uk-container uk-container-expand projects">
        <div>
          <h5 className="txt">
            My Projects <img src={loader} alt="" className="loader" />{" "}
          </h5>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper uk-margin-medium-top"
        >
          {project.map((props) => {
            const { id, img, web, git } = props;
            return (
              <SwiperSlide key={id}>
                <div className="project-swiper">
                  <img src={img} alt="" className="project-img" />
                  <div className="project-bg"></div>
                  <div className="project-link">
                    <div className="web" uk-tooltip="title: Website">
                      <a href={web} target="_blank">
                        <GoGlobe color="#03041c" size="2rem" />
                      </a>
                    </div>

                    <div className="git" uk-tooltip="title: Github">
                      <a href={git} target="_blank">
                        <BsGithub color="#03041c" size="2rem" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Section4;
