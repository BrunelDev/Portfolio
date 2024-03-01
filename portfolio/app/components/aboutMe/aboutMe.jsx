import "../portfolioStyle/portfolio.css";
export function AboutMe() {
  return (
    <div className="aboutMe-container">
      <div className="flex relative">
        <div className="aboutMe-header ">
          <div className="text-pink-pure">#</div>
          About Me
          <hr />
        </div>
      </div>

      <div className="text-white m-5 float-left aboutme-text">
        <p>
          🎨 I am a Frontend Software Enginner (React | Next | Angular) based in
          Dhaka, Bangladesh. Angular developers are primarily in charge of
          developing and designing front end web architecture and building
          interactive consumer data from multiple systems. They define code
          architecture decisions to support high-performance products.
        </p>
        <p className="my-5">
          💡 Transforming my creativity and knowledge into a websites has been
          my passion for over a year. I have been helping various clients to
          establish their presence online. I always strive to learn about the
          newest technologies and frameworks.
        </p>
        <a href="#">VIEW DETAILS</a>
      </div>
      <img src="message.jpg" alt="" />
    </div>
  );
}
