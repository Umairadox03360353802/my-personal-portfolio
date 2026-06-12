

const Skills = () => {
    const skills = [
  {
    category: "Languages",
    items: ["HTML5", "CSS3", "JavaScript", "Node.js"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap","Express"],
  },
  {
    category: "Tools & Tech",
    items: ["Git", "GitHub", "VS Code", "MongoDB", "REST APIs"],
  },
];
  return (
    <section
      id="Skills"
      className="min-h-screen  px-10 py-24 md:px-20 lg:px-28 relative overflow-hidden"
    >
      

    

      {/* Heading */}
      <h2 className="text-2xl text-center md:text-5xl font-bold text-white mb-14 leading-tight">
        Skills that I work with.
      </h2>

      {/* Skills rows */}
      <div className="flex flex-col divide-y divide-white/50 border-t border-white/50">
        {skills.map((group, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 py-8"
          >
            {/* Category label */}
            <div className="w-full md:w-40 shrink-0">
              <span className="text-xs  tracking-[2.5px] uppercase text-white">
                {group.category}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, index2) => (
                <span
                  key={index2}
                  className="px-4 py-2 text-sm text-white/60 border border-white/35 
                             hover:border-white/40 hover:text-white hover:bg-white/5
                             transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;