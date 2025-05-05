import AppWrapper from "@/components/wrapper/app-wrapper";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { RiArrowGoBackFill } from "react-icons/ri";
import FarmCreationForm from "./components/farm-creation-form";

export default function FarmCreationPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("farm-setup-pages");

  return (
    <AppWrapper>
      <div className="flex flex-col justify-center items-center h-full w-full p-4">
        <div className="flex-1 flex flex-col items-center max-w-xs w-full pt-24">
          <img src={"holos-eu-logo.png"} className="w-36 h-36 mb-8" />
          <h2 className="font-bold text-muted-foreground text-2xl text-center">
            {t("farmCreationPageTitle")}
          </h2>
          <FarmCreationForm t={t} />
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
