import Image from "next/image";
export function Projects() {
  return (
    <div class="project">
      <div class="project-header">
        <span className="text-pink-pure">#</span>projects
        <Image
          src="/pinkLine.png"
          alt=""
          className="img"
          width={25}
          height={25}
        />
        <h6>View all</h6>
      </div>
      <div class="project-body">
        <div class="project-">
          <Image
            src="/message.jpg"
            alt="A message app photo"
            className="img"
            height={330}
            width={330}
          />

          <h6 class="technology">
            React Django HTML CSS-Tailwind HTML Mongo Javascript Python Clerk
          </h6>
          <br />

          <div class="project-description">
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
        <div class="project-">
          <div class="">
            <Image
              src="/todolist.jpg"
              alt="A message app photo"
              className="img"
              height={330}
              width={330}
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
        <div class="project-">
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
