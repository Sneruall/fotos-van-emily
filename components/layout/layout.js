import { Fragment } from "react";
import Footer from "./footer";
import MobileNavigation from "./mobileNavigation";

function Layout(props) {
  return (
    <Fragment>
      {/* <MobileNavigation/> */}


      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
