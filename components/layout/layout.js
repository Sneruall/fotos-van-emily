import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";

function Layout(props) {
  return (
    <Fragment>
      <MobileNavigation/>
      <Header />


      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
