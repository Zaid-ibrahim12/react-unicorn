import { Col, Row } from "react-bootstrap";
import { useCategoriesApi } from "../apis/getCategories";
import { useProductsByCategoryApi } from "../apis/getProductsByCategory";
import { Product } from "../components/prpduct/Product";
import { ProductSlideSection } from "../sections/arrival/ArrivalSection";
import { DiscountSection } from "./home/sections/DiscountSection";
import { CarouselSectionHome } from "./home/sections/carousel/CarouselSectionHome";
import { CategoriesList } from "../components/category/CategoriesList";
import { ProductList } from "../components/product-list/ProductList";
import { useState } from "react";
import { Recommend } from "../components/recommended/Recommend";
import { Hero } from "../components/hero/Hero";
// import { Recommend } from "../components/recommended/Recommend";

export const ShopPage = () => {
  const [selectCategories, setSelectCategory]: any = useState(null);

  return (
    <div>
      <Hero/>
      <br/>
      <CategoriesList
        selectCategories={selectCategories}
        setSelectCategory={setSelectCategory}
      />
      <br/>

      <ProductList category={selectCategories} />
      <DiscountSection />
      <Recommend title="Recommended for you"/> 
    </div>
     
  );
};
