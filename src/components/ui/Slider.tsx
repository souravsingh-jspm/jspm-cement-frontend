import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img3 from "@/assets/Images/UniversityImages/left.png";
import img2 from "@/assets/Images/UniversityImages/center.png";
import img1 from "@/assets/Images/UniversityImages/right.png";

const fadeImages = [
  { url: img1, caption: "First Slide" },
  { url: img2, caption: "Second Slide" },
  { url: img3, caption: "Third Slide" },
];

const SlideShow = () => {
  return (
    <div className="mt-24 w-full">
     <Fade
  duration={3000}
  transitionDuration={700}
  infinite
  indicators
  arrows={false}
>
  {fadeImages.map((fadeImage, index) => (
    <div
      key={index}
      className="w-screen h-[50rem] bg-gray-100 relative"
      style={{
        backgroundImage: `url(${fadeImage.url})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      {/* <div className="relative z-10 h-full flex items-center justify-center">
        <div className="bg-yellow-400/90 px-8 py-4 flex items-center gap-4">
          <img
            src="/jspm-logo.png"
            alt="JSPM"
            className="h-14"
          />
          <h2 className="text-2xl font-bold text-black">
            APPLY FOR JSPM UNIVERSITY
          </h2>
        </div>
      </div> */}
        </div>
      ))}
    </Fade>
    </div>
  );
};

export default SlideShow;
