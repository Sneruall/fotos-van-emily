import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import ScrollNavbar from "./scrollNavbar";

function Layout(props) {
  return (
    <Fragment>
      <ScrollNavbar/>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
