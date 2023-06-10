import { Col, Container, Row } from "react-bootstrap";
import { WelcomeSection } from "./home/sections/welcome/WelcomeSection";
import { GallerySection } from "../sections/gallery/GallerySection";
import { ProductSlideSection } from "../sections/arrival/ArrivalSection";
import { DiscountSection } from "./home/sections/DiscountSection";
import { CarouselSectionHome } from "./home/sections/carousel/CarouselSectionHome";

export const HomePage = () => {
  return (
    <div>
      <WelcomeSection />
      <br/>
      <GallerySection />
      <br/>

      <DiscountSection/>
      <br/>
    <CarouselSectionHome/>
    <br/>
      <ProductSlideSection title="New Arrival" swipe={true} isSeeAll />
      <br/>
      <ProductSlideSection title="Best Seller" swipe={false} isSeeAll={false} />
      <br/>
    </div>
  );
};
