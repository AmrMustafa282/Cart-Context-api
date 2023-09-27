import { Col, Row } from "react-bootstrap"
// import storeItems from "../data/storeItems.json"
import Storeitem from "./Storeitem"
import { useEffect, useState } from "react";

const Store = () => {

  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setStoreItems(data))
  })


  return (
    <>
      <h1>Store</h1>
      {storeItems.length === 0
        ?
        <h1>Loading ...</h1>
        :
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <Storeitem {...item} />
            </Col>
          )
          )}
        </Row>
      }

    </>
  )
}

export default Store