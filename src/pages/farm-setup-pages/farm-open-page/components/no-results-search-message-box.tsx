import { Card } from "@/components/ui/card";
import { TFunction } from "i18next";

export default function NoResultsSearchMessageBox({ t }: { t: TFunction }) {
  return (
    <Card className="min-h-[300px] max-h-[300px] w-full h-full flex justify-center items-center flex-col gap-2">
      <h2 className="font-bold text-center text-muted-foreground">
        {t("noResultsFarmSearch")}
      </h2>
    </Card>
  );
}
