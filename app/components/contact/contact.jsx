import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export function Contact() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
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
    if (ref1.current) {
      observer1.observe(ref1.current);
    }
    if (ref2.current) {
      observer2.observe(ref2.current);
    }
    if (ref3.current) {
      observer3.observe(ref3.current);
    }
    return () => {
      observer1.unobserve(ref1.current);
      observer2.unobserve(ref2.current);
      observer3.unobserve(ref3.current);
    };
  }, []);
  return (
    <div className="contact-container">
      <div className="relative">
        <div className="aboutMe-header ">
          <div className="text-pink-pure">#</div>
          Contacts
          <hr
            className={isVisible1 ? "showOnScroll mb-5" : "hideOnScroll mb-5"}
            ref={ref1}
          />
        </div>
        <div className="contact-body">
          <div
            className={
              isVisible2
                ? "showOnScroll contact-box"
                : "hideOnScroll contact-box"
            }
            ref={ref2}
          >
            <span>Contact me here</span>
            <div className="social2">
              <a href="mailto:ahokpossibrunel@gmail.com" className="flex">
                <Image
                  width={25}
                  height={25}
                  src="/Email.png"
                  alt="Email icon"
                />
                <span>ahokpossibrunel@gmail.com</span>
              </a>
            </div>
            <div className="social2">
              <a href="github.com" className="flex">
                <Image
                  width={25}
                  height={25}
                  src="/Github.png"
                  alt="github icon"
                />
                <span>BrunelDev</span>
              </a>
            </div>
            <div className="social2">
              <a href="linkedin.com" className="flex">
                <Image
                  width={25}
                  height={25}
                  src="/Linkedin.svg"
                  alt="Linkedin icon"
                />
                <span>AHOKPOSSI Brunel</span>
              </a>
            </div>
          </div>
          <br />

          <div
            className={
              isVisible3
                ? "showOnScroll text-white float-left contact-text"
                : "hideOnScroll text-white float-left contact-text"
            }
            ref={ref3}
          >
            📞 Let&apos;s build something beautiful together!. I’m interested in
            freelance opportunities. However, if you have other request or
            question, don’t hesitate to contact me.
          </div>
        </div>
      </div>
    </div>
  );
}
