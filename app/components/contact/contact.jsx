import Image from "next/image";
export function Contact() {
  return (
    <div className="contact-container">
      <div className="relative">
        <div className="aboutMe-header ">
          <div className="text-pink-pure">#</div>
          Contacts
          <hr />
        </div>
        <div className="contact-body">
          <div className="contact-box">
            <span>Contact me here</span>
            <div className="social2">
              <a href="mailto:ahokpossibrunel@gmail.com" className="flex">
                <Image src="/Email.png" alt="Email icon" />
                <span>ahokpossibrunel@gmail.com</span>
              </a>
            </div>
            <div className="social2">
              <a href="github.com" className="flex">
                <Image src="/Github.png" alt="github icon" />
                <span>BrunelDev</span>
              </a>
            </div>
            <div className="social2">
              <a href="linkedin.com" className="flex">
                <Image src="/Linkedin.svg" alt="Linkedin icon" />
                <span>AHOKPOSSI Brunel</span>
              </a>
            </div>
          </div>
          <br />
          <div className="text-white float-left contact-text">
            📞 Let&apos;s build something beautiful together!. I’m interested in
            freelance opportunities. However, if you have other request or
            question, don’t hesitate to contact me.
          </div>
        </div>
      </div>
    </div>
  );
}
