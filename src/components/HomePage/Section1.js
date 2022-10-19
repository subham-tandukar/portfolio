import React, { useEffect } from "react";
import dp from "../../img/dp.png";
import gif from "../../img/gif.gif";
import $ from "jquery";
import { IoIosClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const scroll = document.querySelector("html");

const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  $(function () {
    $(".small-image").click(function () {
      var path = $(this).attr("src");
      $("#large-image").attr("src", path);
      $("#show_image_popup").fadeIn();
      $(scroll).css({ "overflow-y": "hidden" });
    });
    $("#close-btn").click(function () {
      $("#show_image_popup").slideUp();
      $(scroll).css({ "overflow-y": "auto" });
    });
  });
  return (
    <>
      <section className="main">
        <div className="uk-container uk-container-expand">
          <div className="uk-grid uk-child-width-1-2@s uk-flex-middle">
            <div>
              <div className="dp">
                <div className="border-top"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
                <div className="border-right"></div>
                <div uk-tooltip="title: View; pos: top-right">
                  <img src={dp} alt="dp" className="small-image" />
                </div>
              </div>
            </div>

            <div className="info">
              <h1 uk-scrollspy="cls: uk-animation-slide-top; delay: 300">
                Frontend Web Developer
              </h1>
              <p uk-scrollspy="cls: uk-animation-fade; delay: 1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                autem, ab inventore reiciendis dolorem doloremque facilis veniam
                consequatur numquam aliquid ea ut molestiae asperiores rem ad
                error eius sequi omnis?
              </p>
              <button
                className="uk-button hover-btn"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos-delay="1500"
              >
                Read More . . .
              </button>
            </div>
          </div>
        </div>

        <div id="show_image_popup">
          <div className="close-btn-area">
            <button
              id="close-btn"
              className="btn"
              uk-tooltip="title: Close; pos: bottom-right"
            >
              <IoIosClose />
            </button>
          </div>
          <div id="image-show-area">
            <img id="large-image" src="" alt="" />
          </div>
        </div>

        <marquee behavior="" direction="right">
          <img src={gif} alt="gif" />
        </marquee>
      </section>
    </>
  );
};

export default Section1;
