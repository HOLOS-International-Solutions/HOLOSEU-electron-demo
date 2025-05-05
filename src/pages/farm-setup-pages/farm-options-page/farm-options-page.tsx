import { Button } from "@/components/ui/button";
import AppWrapper from "@/components/wrapper/app-wrapper";
import { FolderOpen, Import, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from "react-router";

export default function FarmOptionsPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("farm-setup-pages");

  return (
    <AppWrapper>
      <div className="flex flex-col justify-center items-center h-full w-full p-4">
        <div className="flex-1 flex flex-col items-center  pt-24 max-w-4xl">
          <img src={"holos-eu-logo.png"} className="w-36 h-36 mb-8" />
          <h2 className="font-bold text-muted-foreground text-2xl text-center">
            {t("farmOptionsPageTitle")}
          </h2>

          <div className="flex gap-4 justify-center mt-5">
            <Button
              size={"lg"}
              className="w-56"
              onClick={() => navigate("/farm-creation")}
            >
              <Plus /> {t("createFarmButton")}
            </Button>
            <Button
              size={"lg"}
              className="w-56"
              onClick={() => navigate("/farm-open")}
            >
              <FolderOpen />
              {t("openExistingFarmButton")}
            </Button>
          </div>

          <hr className="my-10 w-full" />

          <h2 className="font-bold text-muted-foreground text-lg text-center">
            {t("importSubTitle")}
          </h2>
          <div className="flex justify-center mt-4">
            <Button size={"lg"} variant={"primary"} className="w-56">
              <Import />
              {t("importButton")}
            </Button>
          </div>
        </div>
        <hr className="w-full my-4" />
        <Button size={"lg"} variant={"primary"} onClick={() => navigate("/")}>
          <RiArrowGoBackFill />
          {t("goBackButton")}
        </Button>
      </div>
    </AppWrapper>
  );
}
