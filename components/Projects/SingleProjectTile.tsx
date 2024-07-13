import { Project } from "@/types/ProjectType";
import Link from "next/link";
import Image from "next/image";

type Props = {
  project: Project;
};

const SingleProjectTile = ({ project }: Props) => {
  return (
    <div key={project.slug} className="relative outline outline-2 outline-white rounded-lg group">
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View Project</span>
      </Link>
      <Image src={project.image} alt="Project 1" width={400} height={300} className="object-cover w-full h-60" />
      <div className="p-4 bg-background">
        <h3 className="text-lg font-semibold md:text-xl">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
};

export default SingleProjectTile;
