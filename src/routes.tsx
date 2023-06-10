import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeContainer } from "./containers/HomeContainer";
import { PlatformLayout } from "./components/layout/PlatformLayout";
import { endroutes } from "./constant/endroutes";
import { ShopPage } from "./pages/ShopPage";

export const Navigations = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PlatformLayout />} path={endroutes.home}>
          <Route element={<HomeContainer />} path={endroutes.home} />
          <Route element={<ShopPage />} path={endroutes.shop} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
