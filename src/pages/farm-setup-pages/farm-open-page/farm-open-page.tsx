import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AppWrapper from "@/components/wrapper/app-wrapper";
import {
  useGetFarms,
  UseGetFarmsOptions,
} from "@/hooks/apis/farms/useGetFarms";

import { FolderOpen, Search } from "lucide-react";

import { useTranslation } from "react-i18next";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router";

import { useState } from "react";
import { FarmType } from "@/types/farm";
import FarmTable from "./components/farm-table";
import NoFarmMessageBox from "./components/no-farms-message-box";
import { toast } from "sonner";

export default function FarmOpenPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("farm-setup-pages");

  const [sortOrder, setSortOrder] =
    useState<UseGetFarmsOptions["sort_order"]>("desc");
  const [sortBy, setSortBy] =
    useState<UseGetFarmsOptions["sort_by"]>("date_modified");
  const [searchParam, setSearchParam] =
    useState<UseGetFarmsOptions["search"]>("");

  const { data: farms } = useGetFarms({
    search: searchParam,
    sort_by: sortBy,
    sort_order: sortOrder,
  });
  const [selectedFarmID, setSelectedFarmID] = useState<FarmType["id"] | null>(
    null
  );

  const handleSelectFarm = (farmId: FarmType["id"]) => {
    if (selectedFarmID === farmId) {
      setSelectedFarmID(null);
    } else {
      setSelectedFarmID(farmId);
    }
  };

  const handleSortByOrder = (
    order: UseGetFarmsOptions["sort_order"],
    by: UseGetFarmsOptions["sort_by"]
  ) => {
    setSortOrder(order);
    setSortBy(by);
    setSelectedFarmID(null);
  };

  const handleSearch = (searchStr: UseGetFarmsOptions["search"]) => {
    setSearchParam(searchStr);
    setSelectedFarmID(null);
  };

  return (
    <AppWrapper>
      <div className="flex flex-col justify-center items-center h-full w-full p-4">
        <div className="flex-1 flex flex-col items-center pt-10 max-w-4xl w-full">
          <img src={"holos-eu-logo.png"} className="w-36 h-36 mb-8" />
          <h2 className="font-bold text-muted-foreground text-2xl text-center">
            {t("farmOpenPageTitle")}
          </h2>
          <div className="mt-5 w-full">
            {searchParam?.length === 0 && farms?.length === 0 ? (
              <NoFarmMessageBox t={t} />
            ) : (
              <>
                <div className="relative mb-5">
                  <Search
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-primary"
                    size={20}
                  />
                  <Input
                    placeholder={t("inputSearchPlaceholder")}
                    className="pl-8 w-[50%] placeholder:text-xs text-xs"
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
                <FarmTable
                  t={t}
                  farms={farms ?? []}
                  selectedFarmID={selectedFarmID}
                  handleSelectFarm={handleSelectFarm}
                  sortOrder={sortOrder}
                  handleSortByOrder={handleSortByOrder}
                />
              </>
            )}
          </div>

          <Button
            size={"lg"}
            className="w-56 mt-8"
            onClick={() => toast.success("opened")}
            disabled={selectedFarmID ? false : true}
          >
            <FolderOpen />
            {t("openFarmButton")}
          </Button>
        </div>
        <hr className="w-full my-4" />
        <Button
          size={"lg"}
          variant={"primary"}
          onClick={() => navigate("/farm-options")}
        >
          <RiArrowGoBackFill />
          {t("goBackButton")}
        </Button>
      </div>
    </AppWrapper>
  );
}
