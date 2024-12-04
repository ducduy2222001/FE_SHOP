import React, { useEffect, useMemo, useRef, useState } from "react";
import { withLayout } from "../../../layout";
import { aboutUs1, aboutUs2, shoes1, bgLogin } from "../../../assets/image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const ProductDetail = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const product = {
    name: "Long Sleeve Overshirt, Khaki",
    originalPrice: "$40.00",
    discountedPrice: "$28.00",
    description:
      "Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticatas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon.",
    images: [aboutUs1, aboutUs2, shoes1, bgLogin],
    colors: ["#8B4513", "#D3D3D3", "#1E90FF", "#000000"],
    sizes: ["XL", "M", "L", "XXL"],
    rating: 4,
    numSold: 1238, // Number of items sold
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexImages] = useState([0, 4]);
  const imageRef = useRef<HTMLImageElement>(null);
  const currentImages = useMemo(
    () => (product ? product.images.slice(...currentIndexImages) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product],
  );

  useEffect(() => {
    if (product && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, []);

  const chooseActive = (img: string) => {
    setSelectedImage(img);
  };

  const handlePrevImage = () => {
    const newIndex =
      (currentIndex - 1 + product.images.length) % product.images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(product.images[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex + 1) % product.images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(product.images[newIndex]);
  };

  const handleZoom = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const react = event?.currentTarget.getBoundingClientRect();
    const image = imageRef.current as HTMLImageElement;
    const offsetX = event.pageX - (react.x + window.scrollX);
    const offsetY = event.pageY - (react.y + window.scrollY);

    const top = offsetY * (1 - 500 / react.height);
    console.log("🚀 ~ handleZoom ~ top:", top);
    const left = offsetX * (1 - 500 / react.width);
    console.log("🚀 ~ handleZoom ~ left:", left);
    image.style.width = 500 + "px";
    image.style.height = 500 + "px";
    image.style.maxWidth = "unset";
    image.style.top = top + "px";
    image.style.left = left + "px";
  };

  const handleRemoveZoom = () => {
    imageRef.current?.removeAttribute("styles");
  };

  return (
    <div className="widthScreen margin-center" style={{ padding: "30px 0" }}>
      <Grid container spacing={4} paddingBottom={3} paddingTop={3}>
        {/* Product Image and Thumbnails */}
        <Grid item xs={12} md={6}>
          <Box>
            <img
              ref={imageRef}
              src={selectedImage}
              alt={product.name}
              width={500}
              height={500}
              style={
                {
                  // objectFit: "cover",
                }
              }
              onMouseMove={handleZoom}
              onMouseLeave={handleRemoveZoom}
            />
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <IconButton onClick={handlePrevImage}>
                <ArrowBackIosIcon />
              </IconButton>
              <Box sx={{ display: "flex", overflowX: "auto", maxWidth: "70%" }}>
                {currentImages.map((img, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => {
                      chooseActive(img);
                    }}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      style={{
                        width: "80px",
                        height: "80px",
                        margin: "0 8px",
                        cursor: "pointer",
                        border:
                          selectedImage === img ? "2px solid #1976d2" : "none",
                        borderRadius: "4px",
                      }}
                      onClick={() => {
                        setSelectedImage(img);
                        setCurrentIndex(index);
                      }}
                    />
                  </div>
                ))}
              </Box>
              <IconButton onClick={handleNextImage}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Typography
              variant="h6"
              sx={{ textDecoration: "line-through", marginRight: 1 }}
            >
              {product.originalPrice}
            </Typography>
            <Typography variant="h4" color="primary">
              {product.discountedPrice}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              {product.numSold} Sold
            </Typography>
            <Rating
              name="product-rating"
              value={product.rating}
              precision={0.5}
              readOnly
            />
          </Box>

          <Typography variant="h6" gutterBottom>
            Description:
          </Typography>
          <Typography variant="body2" paragraph>
            {product.description}{" "}
            <Typography variant="button" color="primary">
              See More...
            </Typography>
          </Typography>

          <Typography variant="subtitle1" gutterBottom sx={{ marginTop: 2 }}>
            Color: <b>Royal Brown</b>
          </Typography>
          <Box sx={{ display: "flex", gap: 1, marginBottom: 2 }}>
            {product.colors.map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: color,
                  borderRadius: "4px",
                  cursor: "pointer",
                  border: "2px solid white",
                  boxShadow: `0 0 0 2px ${color}`,
                }}
              />
            ))}
          </Box>

          <Typography variant="subtitle1" gutterBottom>
            Size:
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {product.sizes.map((size, index) => (
              <Button
                key={index}
                variant="outlined"
                sx={{
                  minWidth: "48px",
                  padding: "8px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {size}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 2, marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ flexGrow: 1 }}
            >
              Add To Cart
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ flexGrow: 1 }}
            >
              Checkout Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default withLayout(ProductDetail, {});
