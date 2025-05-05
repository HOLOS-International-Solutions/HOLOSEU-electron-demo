import { format, parseISO } from "date-fns";

export default function formatDate(isoString: string) {
  return format(parseISO(isoString), "dd MMM yyyy, HH:mm");
}
