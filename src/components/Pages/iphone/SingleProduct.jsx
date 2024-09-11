import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "../Error/Error";

function SingleProduct() {
  const [iphone, setIphone] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const result = data.items;
        const single = result.filter((data) => {
          return data.product_url == id;
        });
        setIphone(single);
      });
  }, []);
  const { id } = useParams();
  if (iphone.length) {
    return (
      <>
        {iphone.map(
          (
            {
              product_url,
              product_img,
              product_name,
              product_brief_description,
              starting_price,
              price_range,
            },
            i
          ) => (
            <div
              key={i}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${2}`}>
                <div className="product-title">{product_name}</div>
                <div className="product-brief">{product_brief_description}</div>
                <div className="starting-price">
                  {`Starting at ${starting_price}`}
                </div>
                <div className="monthly-price">{price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={product_url}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`col-sm-12 col-md-6 order-${1}`}>
                <div className="prodict-image">
                  <img src={product_img} alt="" />
                </div>
              </div>
            </div>
          )
        )}
      </>
    );
  } else {
    return <Error />;
  }
}

export default SingleProduct;
