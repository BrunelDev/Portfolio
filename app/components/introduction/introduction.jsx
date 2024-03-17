import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./introduction.css";
export function Introduction() {
  const [isVisible1, setIsVisible1] = useState(false);

  const ref1 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      setIsVisible1(entry.isIntersecting);
    });

    if (ref1.current) {
      observer1.observe(ref1.current);
    }

    return () => {
      observer1.unobserve(ref1.current);
    };
  }, []);
  return (
    <div class="intro-and-img">
      <div class="introducing">
        <div
          className={isVisible1 ? "showIntroOnScroll" : "hideIntroOnScroll"}
          ref={ref1}
        >
          Brunel is a <span class="profession">Fullstack developper</span> and a{" "}
          <span class="profession">mobile developper</span>
        </div>

        <div class="group1">
          <Image
            src="/developperImage.png"
            alt="developerImage"
            width={410}
            height={410}
            className="dev-img img"
          />
          <div class="occupation">Currently working on another banger</div>
        </div>
        <div class="profession-description">
          He crafts amazing websites where creativity meet technology
        </div>
        <a
          href="mailto:ahokpossibrunel@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="contact-me">Contact me !!</span>
        </a>
      </div>
    </div>
  );
}
