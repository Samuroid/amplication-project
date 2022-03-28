import { User } from "../user/User";

export type Task = {
  assignedTo?: User | null;
  createdAt: Date;
  estimationDays: number | null;
  id: string;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title: string;
  updatedAt: Date;
};
