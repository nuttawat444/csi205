import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";

const AppLayout = ({ products, carts, setToken }) => {
  return (
    <div
      className="d-flex flex-column align-items-center min-vh-100 text-center"
      style={{ padding: "20px" }}
    >
      <div>
        <AppHeader />
      </div>
      <div>
        <AppNavbar products={products} carts={carts} setToken={setToken} />
      </div>
      <div
        className="border border-3 rounded-4 p-3 border-dark w-100"
        style={{
          maxWidth: "1000px",
          overflow: "auto",
          minHeight: "500px",
        }}
      >
        <Outlet />
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AppLayout;
