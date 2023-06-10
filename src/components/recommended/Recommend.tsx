import React from "react";
import { Col, Row } from "react-bootstrap";
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

export const Recommend = (props: any) => {
  const { data }: any = useProductApi({ isLimit: true });

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
          <>
            {data.map((item: productType, index: number) => (
              <Col>
                <Product key={index} item={item} isLike={false} isCategory={false} isDesc={false}/>
              </Col>
            ))}
          </>
        ) : null}
      </Row>
    </div>
  );
};
