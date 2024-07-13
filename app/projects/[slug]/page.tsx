import { projects } from "@/data/projectList";

type Props = {
  params: {
    slug: string;
  };
};

const page = ({ params }: Props) => {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) return <div className="min-h-screen flex items-center justify-center text-2xl">Project was not found</div>;

  return <>{project.component}</>;
};

export default page;
