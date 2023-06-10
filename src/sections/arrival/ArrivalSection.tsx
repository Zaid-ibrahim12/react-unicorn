import { Col, Row } from "react-bootstrap";
import "./arrival-section-styles.scss";
import { useEffect, useState } from "react";
import { useProductApi } from "../../apis/getProducts";
import { Product } from "../../components/prpduct/Product";
import Slider from "react-slick";
import { productType } from "../../types/product-type";

type ProductSlidePropsType = {
  title: string;
  swipe: boolean;
  isSeeAll: boolean;
};
export const ProductSlideSection = (props: ProductSlidePropsType) => {
  const { data }: any = useProductApi({isLimit:false});

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: props.swipe,
    swipe: props.swipe,
  };

  return (
    <div id="arrival-section-styles">
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <div className="h2">{props.title}</div>
          <div className="h3 see-all">{props.isSeeAll ? "see all" : null}</div>
        </Col>
      </Row>
      <br />
      <Row>
        {data?.length > 0 ? (
          <Slider {...settings}>
            {data.map((item: productType, index: number) => (
              <Product key={index} item={item} isLike isCategory={true} isDesc={true} />
            ))}
          </Slider>
        ) : null}
      </Row>
    </div>
  );
};
