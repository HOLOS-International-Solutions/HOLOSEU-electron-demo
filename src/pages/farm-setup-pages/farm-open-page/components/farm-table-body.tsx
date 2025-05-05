import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import formatDate from "@/utils/formatDate";
import { FarmTableProps } from "./farm-table";

export default function FarmTableBody({
  farms,
  selectedFarmID,
  handleSelectFarm,
}: Pick<FarmTableProps, "farms" | "selectedFarmID" | "handleSelectFarm">) {
  return (
    <Table>
      <TableBody>
        {farms?.map((farm) => (
          <TableRow
            key={farm.id}
            className={cn(
              "h-[60px] outline-1 cursor-pointer",
              selectedFarmID === farm.id
                ? "outline-primary bg-primary/10 hover:bg-primary/10"
                : "outline-transparent"
            )}
            onClick={() => handleSelectFarm(farm.id)}
          >
            <TableCell className="max-w-[180px] min-w-[180px] truncate text-xs pl-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className="h-[40px]">
                    <div className="max-w-[180px] pt-3 truncate">
                      {farm.name}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="max-w-[180px] p-4 bg-card text-muted-foreground text-[11px] shadow"
                  >
                    <p>{farm.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell className="min-w-[180px] max-w-[180px] text-xs">
              {farm.location}
            </TableCell>
            <TableCell className="min-w-[200px] max-w-[200px] text-[11px]">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className="h-[40px]">
                    <div className="max-w-[200px] pt-3 -ml-2 truncate">
                      {farm.comment}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="max-w-[200px] p-4 bg-card text-muted-foreground text-[11px] shadow"
                  >
                    <p>{farm.comment}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
            <TableCell className="max-w-[150px] min-w-[150px] text-xs text-center pr-5">
              {formatDate(farm.date_created)}
            </TableCell>
            <TableCell className="max-w-[150px] min-w-[150px] text-xs text-center pr-2">
              {formatDate(farm.date_modified)}
            </TableCell>
          </TableRow>
        ))}
        {farms?.length < 5 &&
          Array.from({ length: Math.min(5, 5 - farms?.length) }).map((_, i) => (
            <TableRow key={i} className="h-[60px]">
              <TableCell
                colSpan={5}
                className="text-center text-sm"
              ></TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
