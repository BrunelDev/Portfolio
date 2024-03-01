import { Navbar } from "./components/navbar/navbar.jsx";
import { Quote } from "./components/quote/quote.jsx";
import { Introduction } from "./components/introduction/introduction.jsx";
import { Projects } from "./components/project/project.jsx";
import { Skills } from "./components/skills/skills.jsx";
import { AboutMe } from "./components/aboutMe/aboutMe.jsx";
import { Contact } from "./components/contact/contact.jsx";
import { Footer } from "./components/footer/footer.jsx";
export default function home() {
  return (
    <body>
      <Navbar />
      <Introduction />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </body>
  );
}
