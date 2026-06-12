
function About() {
  return (
    <>
     <div
      id="About"
      className="text-white md:flex overflow-hidden  items-center   md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-5xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center text-center justify-items-center md:justify-around">

            <div className="w-7/12 h-12/12 md:w-5/12 md:h-9/12 mt-4">
              <img className="w-full h-full animate-float" src='./about.png' alt="About img" />
            </div>

          <ul className="text-slate-300">
            <div className="flex gap-3 py-4">

              <span className="md:w-96 min-w-48 ">
                <h1 className="text-xl text-white mb-5 md:text-4xl font-bold leading-normal">
                  Who's behind the screen.             
                  </h1>
               
                <p className="text-xs md:text-lg leading-tight">
                 Hi, I'm <span className="font-bold text-white"> M. Umair Mahmood</span> — a frontend developer from Pakistan who genuinely cares about the craft of building for the web.
                  I started coding out of curiosity, and it quickly became something I can't stop doing.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">

              <span className="md:w-96 min-w-48">
                
                
                <p className="text-xs md:text-lg leading-tight">
                 I study <span className="font-bold text-white"> Software Engineering</span> and spend my free time building projects, learning new tools,
                  and obsessing over clean user interfaces.
                  My goal isn't just to write code — it's to create things that actually feel good to use.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">

              <span className="md:w-96 min-w-48">
                
                <p className="text-xs md:text-lg leading-tight">
                 When I'm not in VS Code, I'm reading about <span className="font-bold text-white"> design systems, web performance, </span>
                  and whatever technology trend caught my eye this week.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default About