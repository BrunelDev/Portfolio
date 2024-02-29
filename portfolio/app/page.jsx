import { Navbar } from "./components/navbar/navbar.jsx";
import { Quote } from "./components/quote/quote.jsx";
import { Introduction } from "./components/introduction/introduction.jsx";
import { Projects } from "./components/project/project.jsx";
import { Skills } from "./components/skills/skills.jsx";
export default function home() {
  return (
    <body>
      <Navbar />
      <Introduction />
      <Quote />
      <Projects />
      <Skills />
    </body>
  );
}
