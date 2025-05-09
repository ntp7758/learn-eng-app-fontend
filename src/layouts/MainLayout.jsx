import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
