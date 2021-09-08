import NavItem from "./navItem";

function navigation() {
  return (
      <nav className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-0 max-w-6xl">
        <ul className="flex flex-row justify-between mt-5 max-w-5xl items-start relative">
          <NavItem text={"Home"} link="/" />
          <NavItem text={"Diensten"} link="/" dropdown />
          <NavItem text={"Portfolio"} link="/portfolio" />
          <NavItem text={"Over mij"} link="/over-mij" />
          <NavItem text={"Contact"} link="/contact" />
        </ul>
      </nav>
  );
}

export default navigation;
