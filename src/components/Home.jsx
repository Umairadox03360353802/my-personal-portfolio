import TextChange from "./TextChange"

function Home() {
  return (
    <>
      <div className="text-white flex w-full justify-between items-center p-10 md:p-20">
        <div className="w-3/4 md:w-2/4 md:pt-10 ">
          <h1 className="text-2xl md:text-6xl font-bold flex leading-normal tracking-tighter">
            <TextChange />

          </h1>
          <p className="text-xs text-slate-300 md:my-5 md:text-xl tracking-wider ">
            I design and develop modern web applications that combine performance,
            usability, and clean design. With a focus on creating seamless user experiences,
            I transform ideas into responsive and engaging digital products.

          </p>
          <a href="#Contacts">

            <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me
            </button>
          </a>
        </div>
        <div className="w-5/12 h-8/12 md:w-4/12 md:h-8/12">
          <img className="w-full h-full animate-float" src='./person.png' alt="avatar" />
        </div>
      </div>
    </>
  )
}

export default Home