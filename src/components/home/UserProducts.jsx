import React, { useEffect } from "react";
import ProductLoaders from "../loaders/ProductLoaders";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../../features/products/productSlice";
import { Button } from "@mui/material";
import { Heart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for the inner slider
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "10px",
        zIndex: 1,
        width: "30px",
        height: "30px",
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "10px",
        zIndex: 1,
        width: "30px",
        height: "30px",
        background: "#fff",
        borderRadius: "50%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
      onClick={onClick}
    />
  );
};

// Inner slider and product card for each product
const ProductCard = ({ product }) => {
  const images = product?.product_images || [];
  const innerSliderSettings = {
    dots: images.length > 1,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: images.length > 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="card-custom shadow-sm">
      <div className="position-relative">
        <Slider {...innerSliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Product Image ${index + 1}`}
                className="img-fluid"
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
        {/* Heart icon positioned at the top-right */}
        <div className="position-absolute top-0 end-0 m-2">
          <Heart size={24} className="text-dark" />
        </div>
      </div>
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">${product?.product_base_price}</h5>
        <p className="card-text">{product?.product_description}</p>
        <Button variant="contained" color="primary" className="w-100">
          + Add to Cart
        </Button>
      </div>
    </div>
  );
};

// Outer slider that displays 3 product cards per slide
const UserProducts = () => {
  const dispatch = useDispatch();
  const { productLoading, products } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getProductData());
  }, [dispatch]);

  const outerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 products at a time
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Inline styles for quick prototyping. For production, move these to a separate CSS file. */}
      <style>{`
        .card-custom {
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          max-width: 300px;
          transition: transform 0.3s ease;
          background: #fff;
          margin: auto;
        }
        .card-custom:hover {
          transform: scale(1.05);
        }
        .slick-dots li button:before {
          color: #000;
        }
        .slick-slide {
          padding: 0 10px;
        }
      `}</style>
      {productLoading ? (
        <ProductLoaders />
      ) : (
        <div className="container py-5">
          {products?.length > 0 ? (
            <Slider {...outerSliderSettings}>
              {products.map((item, index) => (
                <div key={index} className="d-flex justify-content-center">
                  <ProductCard product={item} />
                </div>
              ))}
            </Slider>
          ) : (
            <h2 className="text-center">No Products</h2>
          )}
        </div>
      )}
    </>
  );
};

export default UserProducts;
