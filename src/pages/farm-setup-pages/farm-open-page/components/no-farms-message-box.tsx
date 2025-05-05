import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TFunction } from "i18next";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

export default function NoFarmMessageBox({ t }: { t: TFunction }) {
  const navigate = useNavigate();
  return (
    <Card className="min-h-[300px] max-h-[300px] w-full h-full flex justify-center items-center flex-col gap-2">
      <h2 className="font-bold text-center text-muted-foreground">
        {t("noFarmsCreated")}
      </h2>
      <hr className="w-[30%] mx-auto" />
      <Button
        size={"sm"}
        className="w-56"
        onClick={() => navigate("/farm-creation")}
      >
        <Plus /> {t("createFarmButton")}
      </Button>
    </Card>
  );
}
