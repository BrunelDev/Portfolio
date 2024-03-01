"use client";
import { Navbar } from "./components/navbar/navbar.jsx";
import { Quote } from "./components/quote/quote.jsx";
import { Introduction } from "./components/introduction/introduction.jsx";
import { Projects } from "./components/project/project.jsx";
import { Skills } from "./components/skills/skills.jsx";
import { AboutMe } from "./components/aboutMe/aboutMe.jsx";
import { Contact } from "./components/contact/contact.jsx";
import { Footer } from "./components/footer/footer.jsx";
import { useAuth } from "@/hooks/useAuth.ts";
import { AuthStatus } from "@/hooks/useAuth.ts";
import { UseStore } from "@/hooks/useStore";
import { useEffect } from "react";
const { authentificated, statu } = UseStore();
export default function home() {
  const { status, account } = useAuth();
  useEffect(() => {
    authentificated(statu);
  }, []);
  if (status === AuthStatus.authentificated) {
    return (
      <div>
        <Navbar />
      </div>
    );
  } else if (status === AuthStatus.unknown) {
    return <div>You unknow</div>;
  } else {
    return (
      <div>
        <Contact />
      </div>
    );
  }
}

{
  /*<Navbar />
      <Introduction />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
  <Footer />*/
}
