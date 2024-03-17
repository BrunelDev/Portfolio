import "../portfolioStyle/portfolio.css";
export function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#" id="current">
            home
          </a>
        </li>
        <hr />
        <li>
          <a href="#work">work</a>
        </li>
        <hr />
        <li>
          <a href="#abouMe">about me</a>
        </li>
        <hr />
        <li>
          <a href="#contact">contact</a>
        </li>
        <hr />
      </ul>
    </div>
  );
}
