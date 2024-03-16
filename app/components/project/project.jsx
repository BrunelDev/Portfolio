import Image from "next/image";
import { useState, useRef, useEffect } from "react";
export function Projects() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
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
    <div class="project">
      <div class="project-header">
        <span className="text-pink-pure">#</span>projects
        <Image
          src="/pinkLine.png"
          alt=""
          width={25}
          height={25}
          className={isVisible1 ? "showOnScroll img" : "hideOnScroll img"}
          ref={ref1}
        />
        <h6>View all</h6>
      </div>
      <div className="project-body">
        <div
          className={
            isVisible2 ? "showOnScroll project-" : "hideOnScroll project-"
          }
          ref={ref2}
        >
          <Image
            src="/message.jpg"
            alt="A message app photo"
            height={330}
            width={330}
            className="img"
          />

          <h6 className="technology">
            React Django HTML CSS-Tailwind HTML Mongo Javascript Python Clerk
          </h6>
          <br />

          <div className="project-description">
            <h3>Messenger</h3>
            <h6>An online web chat app</h6>
            <div className="flex gap-2">
              <span class="project-link">
                <a href="">Live ={">"}</a>
              </span>
              <span class="project-link">
                <a href="">Github ={">"} </a>
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            isVisible3 ? "showOnScroll project-" : "hideOnScroll project-"
          }
          ref={ref3}
        >
          <div class="">
            <Image
              src="/todolist.jpg"
              alt="A message app photo"
              height={330}
              width={330}
              className="img"
            />
            <h6 class="technology">
              React Django CSS-Tailwind HTML Mongo Javascript
            </h6>
            <br />
          </div>
          <div class="project-description" id="project-description2">
            <h3>TodoList</h3>
            <h6>An onlineTodo list app</h6>
            <div className="flex gap-2">
              <span class="project-link">
                <a href="">Live ={">"}</a>
              </span>
              <span class="project-link">
                <a href="">Github ={">"}</a>
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            isVisible4 ? "showOnScroll project-" : "hideOnScroll project-"
          }
          ref={ref4}
        >
          <div class="">
            <Image
              src="/comingsoon.jpg"
              alt="A message app photo"
              className="img"
              height={330}
              width={330}
            />
            <h6 class="technology">
              React Django HTML CSS-Tailwind HTML Mongo Javascript Python
            </h6>
            <br />
          </div>
          <div class="project-description">
            <h3>Banger coming soon</h3>
            <h6>Wait and see</h6>
            <div className="flex gap-2">
              <span class="project-link">
                <a href="">Live ={">"}</a>
              </span>
              <span class="project-link">
                <a href="">Github ={">"}</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
