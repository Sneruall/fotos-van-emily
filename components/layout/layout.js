import { Fragment } from "react";
import Testing from "../../pages/testing";
import Footer from "./footer";
import MobileNavigation from "./mobileNavigation";

function Layout(props) {
  return (
    <Fragment>
      {/* <MobileNavigation/> */}
      <Testing/>


      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
