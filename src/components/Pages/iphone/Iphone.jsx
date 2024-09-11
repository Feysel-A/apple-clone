import React, { useEffect, useState } from "react";
import "./iphone.css";
import { Link } from "react-router-dom";
function Iphone() {
  const [iphones, setIphone] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        const result = data.items;
        setIphone(result);
      });
  }, []);
  console.log(iphones);
  return (
    <div>
      <section className="m-5 internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {iphones.map(
            (
              {
                product_url,
                product_name,
                product_img,
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
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    i % 2 == 0 ? 1 : 2
                  }`}
                >
                  <div className="product-title">{product_name}</div>
                  <div className="product-brief">
                    {product_brief_description}
                  </div>
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

                <div
                  className={`col-sm-12 col-md-6 order-${i % 2 == 0 ? 2 : 1}`}
                >
                  <div className="prodict-image">
                    <img src={product_img} alt="" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Iphone;



