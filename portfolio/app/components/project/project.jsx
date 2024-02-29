export function Projects() {
  return (
    <div class="project">
      <div class="project-header">
        <span className="text-pink-pure">#</span>projects
        <img src="pinkLine.png" alt="" />
        <h6>View all</h6>
      </div>
      <div class="project-body">
        <div class="project-">
          <img src="message.jpg" alt="A message app photo" />

          <h6 class="technology">
            React Django HTML CSS-Tailwind HTML Mongo Javascript Python Clerk
          </h6>
          <br />

          <div class="project-description">
            <h3>Messenger</h3>
            <h6>An online web chat app</h6>
          </div>
        </div>
        <div class="project-">
          <div class="">
            <img src="todolist.jpg" alt="A message app photo" />
            <h6 class="technology">
              React Django CSS-Tailwind HTML Mongo Javascript
            </h6>
            <br />
          </div>
          <div class="project-description" id="project-description2">
            <h3>TodoList</h3>
            <h6>An onlineTodo list app</h6>
            <span class="project-link">
              <a href="">Live</a>
            </span>
          </div>
        </div>
        <div class="project-">
          <div class="">
            <img src="comingsoon.jpg" alt="A message app photo" />
            <h6 class="technology">
              React Django HTML CSS-Tailwind HTML Mongo Javascript Python
            </h6>
            <br />
          </div>
          <div class="project-description">
            <h3>Banger coming soon</h3>
            <h6>Wait and see</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
