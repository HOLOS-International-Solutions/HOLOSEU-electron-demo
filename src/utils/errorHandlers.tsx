import { ZodError } from "zod";

export default function extractZodErrorMessage(error: ZodError) {
  return error?.errors?.[0].message || "common:unknownError";
}
