import React from "react";
import Slider from "react-slick";
import styles from "./slider.module.scss";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export interface Images {
  src: StaticImageData;
  url: string;
  alt: string;
  name: string;
}
export interface SlidersProps {
  images: Images[];
}

export const ImageSlider = ({ images }: SlidersProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    adaptiveHeight: true,
  };
  return (
    <div className={styles.box}>
      <Slider {...settings} className={styles.slider}>
        {images.map((image: Images) => {
          return (
            <Image
              src={image.src}
              alt={image.alt}
              // layout={"fill"}
              // objectFit={"cover"}
              className={styles.image__box}

              // style={{
              //   width: "auto",
              //   height: "auto",
              //   // aspectRatio: 16 / 10,]
              //   // objectFit: "contain",
              //   // maxWidth: 590,
              //   position: "relative",
              //   // width: "auto",
              // }}
            />
          );
        })}
      </Slider>
    </div>
  );
};
export default ImageSlider;
