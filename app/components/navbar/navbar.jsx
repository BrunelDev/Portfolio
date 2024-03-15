import Image from "next/image";
import { Menu } from "../menu/menu.jsx";
import "../portfolioStyle/portfolio.css";
export function Navbar() {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left">
          <div className="social">
            <Image
              className="img"
              src="/Line.png"
              alt="A line"
              width={1}
              height={150}
            />

            <div className="social-logo">
              <a href="#">
                <Image
                  className="img"
                  width={25}
                  height={25}
                  layout="intrinsic"
                  src="/Github.png"
                  alt=""
                />
              </a>

              <a href="#">
                <Image
                  className="img"
                  width={25}
                  height={25}
                  layout="intrinsic"
                  src="/Linkedin.svg"
                  alt=""
                />
              </a>

              <a href="#">
                <Image
                  className="img"
                  width={25}
                  height={25}
                  layout="intrinsic"
                  src="/Email.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="header-right">
            <div className="logo">
              <h2>Brunel</h2>
            </div>
            <nav>
              <ul className="flat-menu">
                <a href="#">
                  <li id="current">home</li>
                </a>
                <a href="#">
                  <li>work</li>
                </a>
                <a href="#">
                  <li>about me</li>
                </a>
                <a href="#">
                  <li>contact</li>
                </a>
                <Menu />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
