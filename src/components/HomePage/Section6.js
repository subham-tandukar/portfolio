import React from "react";
import loader from "../../img/loader.gif";
import contact from "../../img/contact.png";
import { HiOutlinePhone } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";
import { BiMapPin } from "react-icons/bi";

const Section6 = () => {
  return (
    <div className="uk-container uk-container-expand projects">
      <div>
        <h5 className="txt">
          Contact Me <img src={loader} alt="" className="loader" />{" "}
        </h5>
      </div>

      <div className="contact uk-grid uk-child-width-1-2 uk-margin-medium-top">
        <div>
          <div className="uk-flex uk-flex-middle uk-flex-wrap">
            <div className="contact-info">
              <h5>Let's get in touch</h5>

              <div className="uk-flex uk-flex-middle uk-flex-wrap uk-margin-medium-top">
                <div className="contact-icon uk-margin-right">
                  <HiOutlinePhone color="#03041c" size="2rem" />
                </div>

                <div>
                  <h4>Phone number</h4>
                  <a href="tel:9869031285">9869031285</a>
                </div>
              </div>

              <div className="uk-flex uk-flex-middle uk-flex-wrap uk-margin-medium-top">
                <div className="contact-icon uk-margin-right">
                  <GoMailRead color="#03041c" size="2rem" />
                </div>

                <div>
                  <h4>Email</h4>
                  <a href="mailto:subhamtndkr9@gmail.com">
                    subhamtndkr9@gmail.com
                  </a>
                </div>
              </div>

              <div className="uk-flex uk-flex-middle uk-flex-wrap uk-margin-medium-top">
                <div className="contact-icon uk-margin-right">
                  <BiMapPin color="#03041c" size="2rem" />
                </div>

                <div>
                  <h4>Address</h4>
                  <a>Jawalakhel, Lalitpur</a>
                </div>
              </div>
            </div>

            <div className="contact-img">
              <img src={contact} alt="" />
            </div>
          </div>
        </div>

        <div className="uk-overflow-hidden">
          <h5 className="uk-margin-bottom">View on Map</h5>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.521321079629!2d85.31208665!3d27.67027795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18329e935345%3A0xf1255831d79cbb55!2sJawalakhel%20Cable%20Networks%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1666109169394!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Section6;
