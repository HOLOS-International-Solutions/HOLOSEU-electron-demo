import { Table, TableHead, TableHeader } from "@/components/ui/table";

import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import { FarmTableProps } from "./farm-table";

export default function FarmTableHeader({
  sortOrder,
  handleSortByOrder,
  t,
}: Pick<FarmTableProps, "sortOrder" | "handleSortByOrder" | "t">) {
  return (
    <Table className="rounded-t-md bg-primary">
      <TableHeader className="bg-transparent">
        <TableHead className="w-[180px] text-primary-foreground pl-4">
          {t("tableFarmName")}
        </TableHead>
        <TableHead className="w-[180px] text-primary-foreground">
          {t("tableFarmLocation")}
        </TableHead>
        <TableHead className="w-[200px] text-primary-foreground">
          {t("tableFarmComment")}
        </TableHead>
        <TableHead className="max-w-[150px] min-w-[150px] text-primary-foreground text-center">
          <div className="flex items-center gap-2 justify-center">
            {t("tableFarmDateCreated")}
            <div>
              {sortOrder === "asc" ? (
                <HiOutlineSortAscending
                  className="cursor-pointer"
                  onClick={() => handleSortByOrder("desc", "date_created")}
                />
              ) : (
                <HiOutlineSortDescending
                  className="cursor-pointer"
                  onClick={() => handleSortByOrder("asc", "date_created")}
                />
              )}
            </div>
          </div>
        </TableHead>
        <TableHead className="max-w-[150px] min-w-[150px] text-primary-foreground text-center pr-2">
          <div className="flex items-center gap-2 justify-center">
            {t("tableFarmDateModified")}
            <div>
              {sortOrder === "asc" ? (
                <HiOutlineSortAscending
                  className="cursor-pointer"
                  onClick={() => handleSortByOrder("desc", "date_modified")}
                />
              ) : (
                <HiOutlineSortDescending
                  className="cursor-pointer"
                  onClick={() => handleSortByOrder("asc", "date_modified")}
                />
              )}
            </div>
          </div>
        </TableHead>
      </TableHeader>
    </Table>
  );
}
