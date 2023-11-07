"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IconWithText from "@/components/IconWithText";

import testImage from "../assets/croppedImage.jpg";

const testArray = [
  {
    title: "One",
    image: testImage,
    alt: "lake in the mountains",
  },
  {
    title: "Two",
    image: testImage,
    alt: "lake in the mountains",
  },
  {
    title: "Three",
    image: testImage,
    alt: "lake in the mountains",
  },
];

const HorizontalCarousel = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="py-6"
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      responsive={responsive}
    >
      {/* {test?.map((item, i) => (
        <div
          className="flex flex-col justify-center items-center w-full border-2 border-red-600 bg-primary-500"
          key={`card-${i}`}
        >
          <h3 className="text-gray-800 text-3xl font-bold">{item}</h3>
        </div>
      ))} */}
      {testArray.map((item, i) => (
        <div className="w-full p-8" key={`card-${i}`}>
          <IconWithText details={item} key={i} />
        </div>
      ))}
    </Carousel>
  );
};

export default HorizontalCarousel;
