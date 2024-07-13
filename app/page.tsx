import { projects } from "@/data/projectList";
import SingleProjectTile from "@/components/Projects/SingleProjectTile";
import ProjectTitle from "@/components/Projects/ProjectTitle";

export default function Home() {
  return (
    <main>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="space-y-12 px-4 md:px-6">
          <ProjectTitle />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project) => {
              return <SingleProjectTile key={project.slug} project={project} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
