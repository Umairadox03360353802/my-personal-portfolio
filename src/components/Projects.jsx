import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-xl mb-4 md:text-5xl text-white font-bold">Projects I've built</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          demoUrl='https://thriving-swan-0a698f.netlify.app/'
          sourceCodeUrl='https://github.com/Umairadox03360353802/E-Mech-Shop'
          bannerImg='./mechShop.png'
          title="Blogging Website"
          main="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
        demoUrl='https://cgheven.netlify.app/'
        sourceCodeUrl='https://github.com/Umairadox03360353802/CGHeven'
          bannerImg='./cgheven.png'
          title="CG Heaven"
          main="A visually engaging gallery application built with Next.js and Tailwind CSS. Showcases high-quality 3D models and images with a responsive and optimized user experience."
        />
        <ProjectCard
        demoUrl='https://hospital-managment-system-mum.netlify.app/'
        sourceCodeUrl='https://github.com/Umairadox03360353802/hospital_management_backend'
        bannerImg='./hms.png'
          title="Hospital Management System"
          main="A full-stack MERN application designed to streamline hospital operations. Includes dual frontends for patients and administrators, along with secure backend APIs and database management."
        />
        <ProjectCard
        demoUrl='https://aykays-website.netlify.app/'
        sourceCodeUrl='https://github.com/Umairadox03360353802/Aykays-test-site'
        bannerImg='./myBindle.png'
          title="MyBindle Networking Website"
          main="A responsive business networking website built with React.js, HTML, and CSS. Designed to present company services, information, and digital solutions through a clean user interface."
        />
        <ProjectCard
        demoUrl='https://famous-kelpie-a4f652.netlify.app/'
        sourceCodeUrl='https://github.com/Umairadox03360353802/weather-app-react.js'
        bannerImg='./weatherApp.png'
          title="Weather App"
          main="A React-based weather application integrated with a live weather API. Allows users to search any city and view real-time weather conditions and forecasts instantly."
        />
        
      </div>
    </div>
  );
};

export default Projects;