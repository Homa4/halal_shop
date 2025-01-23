import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Overview.css";
import { ContextForOverview } from "../../Context/OverviewContext";
import Product from "../../InfoType/infotype";

function Overview(): React.ReactElement {
  const context = useContext(ContextForOverview);
  const [galleryVisible, setGalleryVisibile] = useState<boolean>(false);
  const [currentImg, setcurrentImg] = useState(0);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("ContextForOverview is undefined");
  }
  const { state, dispatch } = context;

  if (!state) {
    return <div>Error: Product data is not available.</div>;
  }
  const product: Product = state;

  const galleryImages = product.images;

  const showGallery = () => {
    setGalleryVisibile(true);
  };

  const hideGallery = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).className === "gallery_active") {
      setGalleryVisibile(false);
    }
  };

  const showNextImg = () => {
    setcurrentImg((prevIndex) =>
      prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPrevImg = () => {
    setcurrentImg((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1
    );
  };

  return (
    <div className="overview">
      <div
        className={galleryVisible ? "gallery_active" : "gallery_passive"}
        onClick={hideGallery}
      >
        <div className="gallery_img_container">
          <img
            src={galleryImages[currentImg]}
            alt="Gallery Image"
            className="gallery_img"
          />
          <button
            className="gallery_arrow gallery_arrow_left"
            onClick={showPrevImg}
          >
            &#10094;
          </button>
          <button
            className="gallery_arrow gallery_arrow_right"
            onClick={showNextImg}
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="overview_header">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="overview_thumbnail"
          onClick={showGallery}
        />
        <div className="overview_info">
          <h1 className="overview_title">{product.title}</h1>
          <p className="overview_category">Category: {product.category}</p>
          <p className="overview_price">${product.price.toFixed(2)}</p>
          <p className="overview_discount">
            Discount: {product.discountPercentage}%
          </p>
          <p className="overview_stock">Stock: {product.stock}</p>
          <p className="overview_availability">
            Availability: {product.availabilityStatus}
          </p>
          <p className="overview_brand">Brand: {product.brand}</p>
          <p className="overview_sku">SKU: {product.sku}</p>
        </div>
      </div>

      <div className="overview_description">
        <h2>Description</h2>
        <p>{product.description}</p>
      </div>

      <div className="overview_shipping">
        <h2>Shipping & Warranty</h2>
        <p>{product.shippingInformation}</p>
        <p>{product.warrantyInformation}</p>
      </div>

      <div className="overview_dimensions">
        <h2>Dimensions</h2>
        <p>
          Width: {product.dimensions.width} cm, Height:{" "}
          {product.dimensions.height} cm, Depth: {product.dimensions.depth} cm
        </p>
        <p>Weight: {product.weight} kg</p>
      </div>

      <div className="overview_reviews">
        <h2>Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="overview_review">
            <p>
              <strong>{review.reviewerName}</strong> ({review.rating} ★):
            </p>
            <p>{review.comment}</p>
            <p className="review_date">
              Date: {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      <div className="overview_meta">
        <h2>Additional Information</h2>
        <p>Created At: {new Date(product.meta.createdAt).toLocaleString()}</p>
        <p>Updated At: {new Date(product.meta.updatedAt).toLocaleString()}</p>
        <p>Barcode: {product.meta.barcode}</p>
        <img
          src={product.meta.qrCode}
          alt="QR Code"
          className="overview_qrcode"
        />
      </div>

      <div className="overview_return">
        <h2>Return Policy</h2>
        <p>{product.returnPolicy}</p>
      </div>

      <div className="overview_go_back">
        <button
          onClick={() => {
            navigate(-1);
            dispatch({ type: "DeleteFromState" });
          }}
          className="go_back_button"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Overview;
