export function Skills() {
  return (
    <div className="skills">
      <div className="skills-header">
        <span className="text-pink-pure">#</span>skills
        <Image src="./pinkLine.png" alt="" />
      </div>
      <div className="skill-list">
        <div className="skillbox">
          <div className="skillbox-header">Languages</div>
          <hr />
          <div className="skillbox-body">Python Javascript</div>
        </div>
        <div className="skillbox">
          <div className="skillbox-header">Databases</div>
          <hr />
          <div className="skillbox-body">SQLite MongoDB Prisma</div>
        </div>
        <div className="skillbox">
          <div className="skillbox-header">Tools</div>
          <hr />
          <div className="skillbox-body">Vs code Pycharm Git</div>
        </div>
        <div className="skillbox">
          <div className="skillbox-header">Others</div>
          <hr />
          <div className="skillbox-body">DRF HTML CSS Tailwind</div>
        </div>
        <div className="skillbox">
          <div className="skillbox-header">Frameworks</div>
          <hr />
          <div className="skillbox-body">Django React Node.js Express.js</div>
        </div>
      </div>
    </div>
  );
}
