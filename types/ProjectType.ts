export type Project = {
  title: string;
  description: string;
  slug: string;
  component: React.ReactNode;
  image: string;
  dateCreated: Date;
  labels: Label[];
  difficulty: "NEWBIE" | "JUNIOR" | "INTERMEDIATE" | "ADVANCED" | "GURU";
};

type Label = {
  labels: string[];
};
