import "../portfolioStyle/portfolio.css";
export function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <a href="#" id="current">
          <li>home</li>
        </a>
        <hr />
        <a href="#project">
          <li>Projects</li>
        </a>
        <hr />
        <a href="#aboutMe">
          <li>about me</li>
        </a>
        <hr />
        <a href="#contact">
          <li>contact</li>
        </a>
        <hr />
      </ul>
    </div>
  );
}
