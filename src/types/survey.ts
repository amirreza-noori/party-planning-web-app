import { Task } from "./task";

export type Survey = {
  question: string;
  answers: {
    title: string;
    tasks: Task[];
  }[];
};
