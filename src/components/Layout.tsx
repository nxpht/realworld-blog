import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Banner from "./Banner";
function Layout() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
