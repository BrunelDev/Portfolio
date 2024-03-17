import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "../portfolioStyle/portfolio.css";
import "./aboutMe.css";

export function AboutMe() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      setIsVisible1(entry.isIntersecting);
    });
    const observer2 = new IntersectionObserver(([entry]) => {
      setIsVisible2(entry.isIntersecting);
    });
    const observer3 = new IntersectionObserver(([entry]) => {
      setIsVisible3(entry.isIntersecting);
    });
    const observer4 = new IntersectionObserver(([entry]) => {
      setIsVisible4(entry.isIntersecting);
    });

    if (ref1.current) {
      observer1.observe(ref1.current);
    }
    if (ref2.current) {
      observer2.observe(ref2.current);
    }
    if (ref3.current) {
      observer3.observe(ref3.current);
    }
    if (ref4.current) {
      observer4.observe(ref4.current);
    }
    return () => {
      observer1.unobserve(ref1.current);
      observer2.unobserve(ref2.current);
      observer3.unobserve(ref3.current);
      observer4.unobserve(ref4.current);
    };
  }, []);

  return (
    <div className="aboutMe-container" id="aboutMe">
      <div className="flex relative">
        <div className="aboutMe-header ">
          <div className="text-pink-pure">#</div>
          About Me
          <hr
            className={isVisible4 ? "showOnScroll img" : "hideOnScroll img"}
            ref={ref4}
          />
        </div>
      </div>

      <div className="text-white m-5 float-left aboutme-text">
        <p className={isVisible1 ? "showOnScroll" : "hideOnScroll"} ref={ref1}>
          🎨 I am a Fullstack Software Engineer (React | Nodejs | Django |
          Nextjs) based in Abomey-Calavi, Benin. Fullstack developers are
          primarily in charge of developing and designing front and back-end web
          architecture and building interactive consumer data from multiple
          systems. They define code architecture decisions to support
          high-performance products.
        </p>
        <p
          className={isVisible2 ? "showOnScroll my-5" : "hideOnScroll my-5"}
          ref={ref2}
        >
          💡 Transforming my creativity and knowledge into websites has been my
          passion for over a year. I always strive to learn about the newest
          technologies and frameworks.
        </p>
        <div
          className={isVisible3 ? "showOnScroll mb-5" : "hideOnScroll mb-5"}
          ref={ref3}
        >
          <a href="#">VIEW DETAILS</a>
        </div>
      </div>
      <Image src="/message.jpg" alt="" width={25} height={25} className="img" />
    </div>
  );
}
