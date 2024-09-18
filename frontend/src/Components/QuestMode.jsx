import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QuestMode = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true,
      },
    });

    tl.to(imgRef.current, {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    }).to(
      heroRef.current,
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full z-10">
      <div className="relative w-full overflow-x-hidden z-10">
        <section
          ref={heroRef}
          className="w-full h-screen bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        ></section>
        <section className="w-full h-screen bg-gradient-to-r from-purple-500 to-purple-900"></section>
      </div>
      <div className="absolute top-0 left-0 right-0 w-full h-screen perspective-500 overflow-hidden z-20">
        <img
          ref={imgRef}
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="Quest Mode Image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default QuestMode;
