import { Col, Row } from "react-bootstrap";
import { Product } from "../prpduct/Product";
import { useProductsByCategoryApi } from "../../apis/getProductsByCategory";

type ProductListPropsType = {
  category: string;
  
};
export const ProductList = (props: ProductListPropsType) => {
  const products = useProductsByCategoryApi(props.category);

  return (
    <div>
      <Row>
        {products?.data?.map((item, index) => (
          <Col xs={3}>
            <Product item={item} isLike={true} isCategory isDesc />
          </Col>
        ))}
      </Row>
    </div>
  );
};
