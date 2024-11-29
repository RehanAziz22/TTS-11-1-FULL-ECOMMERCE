import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      title: "Welcome to Our Platform",
      description: "Experience the best services we offer.",
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg?ts=1606113265",
    },
    {
      id: 2,
      title: "Learn and Grow",
      description: "Join our courses to upskill yourself.",
      image: "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    },
    {
      id: 3,
      title: "Join Our Community",
      description: "Be a part of something amazing.",
      image: "https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg",
    },
  ];

  return (
    <Box sx={{ maxWidth: "100%", margin: "auto" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              color: "#fff",
              textAlign: "center",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                marginBottom: 2,
              }}
            >
              {slide.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
              }}
            >
              {slide.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;
