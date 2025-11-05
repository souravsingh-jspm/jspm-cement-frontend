import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img3 from "@/assets/Images/UniversityImages/left.jpg";
import img2 from "@/assets/Images/UniversityImages/center.jpg";
import img1 from "@/assets/Images/UniversityImages/right.jpg";

const fadeImages = [
  {
    url: img1,
    caption: "First Slide",
  },
  {
    url: img2,
    caption: "Second Slide",
  },
  {
    url: img3,
    caption: "Third Slide",
  },
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: "100%" }} src={fadeImage.url} />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideShow;
