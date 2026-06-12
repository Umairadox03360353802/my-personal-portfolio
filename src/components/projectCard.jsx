const ProjectCard = ({ title, main, bannerImg ,demoUrl,sourceCodeUrl }) => {
  return (
    <div className="p-3 md:p-5 flex flex-col justify-between w-72 h-[480px] md:w-96   bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
       <div className="w-auto h-40 " >
      <img className=" w-full h-full rounded-xl object-cover" src={bannerImg} alt="banner" />
        </div> 

      <h3 className="p-4  text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
         <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >

        <button className=" text-white py-2 px-3 text-xs md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        </a>
          <a
          href={sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >

        <button className=" text-white py-2 px-3 text-xs md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;