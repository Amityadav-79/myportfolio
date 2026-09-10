import { Briefcase, Code, Database, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h3 className="text-2xl md:text-3xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Computer Science student and Web Developer
              with a strong interest in creating responsive, accessible, and
              user-friendly web applications using modern technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I have experience in Data Analytics and Full-Stack Development,
              and I enjoy solving real-world problems through technology.
              I am constantly learning new tools and technologies to improve
              my development and data skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/projects/Amit-Yadav-CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary
                text-primary hover:bg-primary/10
                transition-colors duration-300 text-center"
              >
                Download CV
              </a>

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-5">

            {/* WEB DEVELOPMENT */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Web Development
                  </h4>

                  <p className="text-muted-foreground mt-1">
                    Building responsive websites and web applications using
                    modern technologies and frameworks.
                  </p>
                </div>

              </div>
            </div>


            {/* DATA ENGINEERING / DATA ANALYST */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Database className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Data Engineering / Data Analytics
                  </h4>

                  <p className="text-muted-foreground mt-1">
                    Working with data analysis, data processing, SQL,
                    reporting, and building data-driven solutions.
                  </p>
                </div>

              </div>
            </div>


            {/* EDUCATION */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Education
                  </h4>

                  <div className="mt-2 space-y-3">

                    <div>
                      <p className="font-medium">
                        Master of Science – Computer Science
                      </p>

                      <p className="text-sm text-muted-foreground">
                        2025 – 2027 • CGPA: 8.50
                      </p>
                    </div>

                    <div>
                      <p className="font-medium">
                        Bachelor of Science – Computer Science
                      </p>

                      <p className="text-sm text-muted-foreground">
                        2020 – 2023 • CGPA: 9.32
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>


            {/* WORK EXPERIENCE */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Work Experience
                  </h4>

                  <div className="mt-3 space-y-4">

                    {/* Full Stack Trainer */}
                    <div>
                      <p className="font-medium">
                        Full Stack Developer Trainer
                      </p>

                       <p className="text-sm text-primary">
                        Infodesk Computer Education(ICE)
                      </p>

                      <p className="text-sm text-muted-foreground mt-1">
                        Aug 12, 2024 – Present
                      </p>

                      <p className="text-sm text-muted-foreground mt-1">
                        Training students in full-stack web development,
                        frontend technologies, backend development, and
                        modern web development practices.
                      </p>
                    </div>


                    {/* Data Analyst */}
                    <div>
                      <p className="font-medium">
                        Data Analyst
                      </p>

                      <p className="text-sm text-primary">
                        MCM Private Limited
                      </p>

                      <p className="text-sm text-muted-foreground mt-1">
                        Oct 12, 2023 – Feb 17, 2024
                      </p>

                      <p className="text-sm text-muted-foreground mt-1">
                        Worked with data analysis, reporting, and
                        data-driven insights to support business decisions.
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};