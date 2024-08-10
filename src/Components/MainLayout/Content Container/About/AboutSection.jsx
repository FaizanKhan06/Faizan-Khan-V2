import React, { forwardRef } from "react";
import TextHoverAnimation from "./TextHoverAnimation";

const AboutSection = forwardRef(({data}, ref) => {
  return(
  <section
    id="about"
    ref={ref}
    className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    aria-label="About me"
  >
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-headingBackGround/15 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-primaryColorLight lg:sr-only">
        About
      </h2>
    </div>
    <div>
      <p className="mb-4">
        Back in 2016, I decided to try my hand in game development and tumbled
        headfirst into the rabbit hole of coding and web and app development.
        Since then, I've focused on creating accessible and engaging user
        interfaces using technologies like React, Tailwind CSS, and Node.js.
      </p>
      <p className="mb-4">
        My journey has been about merging design with engineering to build
        products that are both functional and visually appealing. I have honed
        my skills through various projects, including real-time fire detection
        systems and secure file-sharing applications.
      </p>
      <p>
        In my free time, I enjoy &nbsp;
        <TextHoverAnimation text={'exploring web'} color={'#0044cc'}/>
        ,&nbsp;
        <TextHoverAnimation text={'traveling'} color={'#ee9a76'}/>
        , trying new&nbsp;
        <TextHoverAnimation text={'foods'} color={'#f8d700'}/>
        , &nbsp;
        playing&nbsp;
      <TextHoverAnimation text={'football'} color={'#10e947'}/>
        , and&nbsp;
      <TextHoverAnimation text={'swimming'} color={'#01aff8'}/>
      .
      </p>
    </div>
  </section>
)});

export default AboutSection;

/*
{" "}<a
          className="font-medium text-primaryColorLight hover:text-secondaryColor focus-visible:text-secondaryColor"
          href="https://www.newline.co/courses/build-a-spotify-connected-app"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="online video course (opens in a new tab)"
        >
          online video course
        </a>{" "}
*/
