import { z } from "zod";

// FarmCreate (input validation)
export const FarmCreateSchema = z.object({
  name: z
    .string()
    .min(1, "missingFarmNameError")
    .max(100, "farmNameTooLongError"),
  comment: z
    .string()
    .min(1, "missingFarmCommentError")
    .max(500, "farmCommentTooLongError"),
});
