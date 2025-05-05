import { FarmCreateSchema } from "@/schemas/farm";
import { z } from "zod";

export type FarmCreateType = z.infer<typeof FarmCreateSchema>;

export type FarmType = FarmCreateType & {
  id: number;
  location: string;
  date_created: string;
  date_modified: string;
};
