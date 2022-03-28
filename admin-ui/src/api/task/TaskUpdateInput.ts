import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: UserWhereUniqueInput | null;
  estimationDays?: number | null;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done" | null;
  title?: string;
};
