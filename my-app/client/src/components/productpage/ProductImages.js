import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import images from "./ProductGallery";
import "../../styles/productpage.css";

function ProductImages() {
  return (
    <div className="gallery">
      <ImageGallery
        showFullscreenButton={false}
        showPlayButton={false}
        items={images}
      />
    </div>
  );
}

export default ProductImages;
