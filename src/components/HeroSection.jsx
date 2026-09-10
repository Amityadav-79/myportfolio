import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* LEFT - TEXT */}
          <div className="text-center md:text-left">
            <div className="space-y-6">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">
                  Hi, I'm{" "}
                </span>

                <span className="text-primary opacity-0 animate-fade-in-delay-1">
                  Amit Yadav
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
                I create stellar web experiences with modern technologies.
                Specializing in front-end development, I build interfaces
                that are both beautiful and functional.
              </p>

              <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#projects" className="cosmic-button">
                  View My Work
                </a>
              </div>

            </div>
          </div>


          {/* RIGHT - PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">

            <div className="relative">

              {/* Purple glow behind image */}
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-90"></div>

              {/* Gradient border */}
              <div className="relative p-1 rounded-[2rem] bg-gradient-to-br from-primary via-purple-400 to-transparent">

                <div className="rounded-[1.9rem] overflow-hidden bg-background">

                  <img
                    src="/projects/myphoto.png"
                    alt="Amit Yadav"
                    className="w-72 h-80 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem] object-cover object-top"
                  />

                </div>
              </div>

              {/* Small decorative circle */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm"></div>

              {/* Small decorative circle */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 border border-primary/50"></div>

            </div>
          </div>

        </div>
      </div>


      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

    </section>
  );
};