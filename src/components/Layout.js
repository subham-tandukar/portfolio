import React, { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import MessengerCustomerChat from "react-messenger-customer-chat";

const Layout = (props) => {
  return (
    <>
      <Fragment>
        <Navbar />
        {props.children}
        <Footer />

        {/* <MessengerCustomerChat
          pageId="<PAGE_ID>"
          appId="<APP_ID>"
        /> */}
      </Fragment>
    </>
  );
};

export default Layout;
