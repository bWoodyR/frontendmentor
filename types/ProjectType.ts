export type Project = {
  title: string;
  description: string;
  slug: string;
  component: React.ReactNode;
  image: string;
  dateCreated: Date;
  labels: Label[];
};

type Label = {
  labels: string[];
};
