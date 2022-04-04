import { useEffect, useState } from "react";
import "./styles.css";
const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    if (imageRef) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%"
          }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    // return () => {
    //   observer.unobserve(imageRef);
    // };
  }, [imageRef, imageSrc, src]);

  return <img src={imageSrc} alt={alt} ref={setImageRef} />;
};

export default LazyImage;
