import React from "react";

const About = () => {
  return (
    <div id="about" className="block md:flex relative z-0 h-full w-full">
      <div className="h-full w-full md:w-1/2 bg-cover bg-no-repeat bg-about rounded-r-3xl"></div>
      <div className="w-1/2 z-20 bg-dark">
        <div className="w-full h-full flex flex-col gap-5 items-start justify-center px-10">
          <div  className="text-white bg-primary px-5 py-1 rounded-xl border-solid border-2 border-action">
            ABOUT
          </div>
          <h1 className="text-white font-bold text-5xl">Coffeeholic</h1>
          <span>
            <p className="text-secondary">
              I am Kilian, a passionate freelancer from Hamburg, Germany and the
              founder of LOKKEE STUDIOS, bringing you web development and design
              from the future. My expertise is developing next-level websites
              and web applications including full frontend design.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
