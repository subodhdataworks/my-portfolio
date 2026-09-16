import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-7xl mx-auto z-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-[34px] md:text-[44px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Featured Analytics Projects
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base max-w-xl mx-auto">
          Production dashboards, DAX architectures, and predictive machine learning models built for high-stakes decision-making.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            metric={project.metric}
          />
        ))}
      </div>
    </section>
  );
};
