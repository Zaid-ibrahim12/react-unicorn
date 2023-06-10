import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { NavHeader } from "./NavHeader";

export const PlatformLayout = () => {
  return (
    <>
      <Header />
      <NavHeader />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
