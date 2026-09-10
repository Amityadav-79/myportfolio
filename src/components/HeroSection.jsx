import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-center
        px-4
        sm:px-6
        md:px-10
        lg:px-16
        pt-24
        pb-20
        overflow-hidden
      "
    >
      <div className="container max-w-7xl mx-auto z-10">
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            items-center
            gap-10
            sm:gap-12
            lg:gap-20
          "
        >
          {/* LEFT - TEXT */}
          <div className="text-center md:text-left">
            <div className="space-y-5 sm:space-y-6">

              {/* Heading */}
              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  tracking-tight
                  leading-tight
                "
              >
                <span className="opacity-0 animate-fade-in block sm:inline">
                  Hi, I'm{" "}
                </span>

                <span
                  className="
                    text-primary
                    opacity-0
                    animate-fade-in-delay-1
                    inline-block
                  "
                >
                  Amit Yadav
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  text-base
                  sm:text-lg
                  md:text-xl
                  text-muted-foreground
                  max-w-2xl
                  mx-auto
                  md:mx-0
                  leading-relaxed
                  opacity-0
                  animate-fade-in-delay-3
                "
              >
                I create stellar web experiences with modern technologies.
                Specializing in front-end development, I build interfaces
                that are both beautiful and functional.
              </p>

              {/* Button */}
              <div
                className="
                  pt-2
                  sm:pt-4
                  opacity-0
                  animate-fade-in-delay-4
                "
              >
                <a href="#projects" className="cosmic-button">
                  View My Work
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - PROFILE IMAGE */}
          <div
            className="
              flex
              justify-center
              md:justify-end
              mt-6
              sm:mt-8
              md:mt-0
              opacity-0
              animate-fade-in-delay-2
            "
          >
            <div className="relative">

              {/* Purple glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-primary/30
                  blur-3xl
                  rounded-full
                  scale-90
                "
              ></div>

              {/* Gradient border */}
              <div
                className="
                  relative
                  p-1
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-primary
                  via-purple-400
                  to-transparent
                "
              >
                <div
                  className="
                    rounded-[1.9rem]
                    overflow-hidden
                    bg-background
                  "
                >
                  <img
                    src="/projects/myphoto.png"
                    alt="Amit Yadav"
                    className="
                      w-64
                      h-72
                      sm:w-72
                      sm:h-80
                      md:w-80
                      md:h-[26rem]
                      lg:w-96
                      lg:h-[30rem]
                      object-cover
                      object-top
                    "
                  />
                </div>
              </div>

              {/* Bottom-left decoration */}
              <div
                className="
                  absolute
                  -bottom-3
                  -left-3
                  sm:-bottom-4
                  sm:-left-4
                  w-10
                  h-10
                  sm:w-12
                  sm:h-12
                  rounded-full
                  bg-primary/20
                  border
                  border-primary/40
                  backdrop-blur-sm
                "
              ></div>

              {/* Top-right decoration */}
              <div
                className="
                  absolute
                  -top-3
                  -right-3
                  sm:-top-4
                  sm:-right-4
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  rounded-full
                  bg-primary/30
                  border
                  border-primary/50
                "
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div
        className="
          absolute
          bottom-4
          sm:bottom-8
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          animate-bounce
          hidden
          sm:flex
        "
      >
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
