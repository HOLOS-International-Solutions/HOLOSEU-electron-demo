import { UseGetFarmsOptions } from "@/hooks/apis/farms/useGetFarms";

import { FarmType } from "@/types/farm";

import NoResultsSearchMessageBox from "./no-results-search-message-box";
import { TFunction } from "i18next";
import FarmTableHeader from "./farm-table-header";
import FarmTableBody from "./farm-table-body";

export interface FarmTableProps {
  t: TFunction;
  farms: FarmType[] | [];
  selectedFarmID: number | null;
  handleSelectFarm: (id: number) => void;
  sortOrder: UseGetFarmsOptions["sort_order"];
  handleSortByOrder: (
    order: UseGetFarmsOptions["sort_order"],
    by: UseGetFarmsOptions["sort_by"]
  ) => void;
}

export default function FarmTable({
  t,
  farms,
  selectedFarmID,
  handleSelectFarm,
  sortOrder,
  handleSortByOrder,
}: FarmTableProps) {
  return (
    <div className="border rounded-md shadow">
      <FarmTableHeader
        t={t}
        sortOrder={sortOrder}
        handleSortByOrder={handleSortByOrder}
      />
      <div className={`max-h-[300px] min-h-[300px] overflow-y-scroll`}>
        {farms.length === 0 ? (
          <NoResultsSearchMessageBox t={t} />
        ) : (
          <FarmTableBody
            farms={farms}
            selectedFarmID={selectedFarmID}
            handleSelectFarm={handleSelectFarm}
          />
        )}
      </div>
    </div>
  );
}
