import AppWrapper from "@/components/wrapper/app-wrapper";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router";
import LanguageSelectorHome from "@/components/i18n/language-selector-home";
import { Trans, useTranslation } from "react-i18next";

export default function LandingPage() {
  const navigate = useNavigate();
  const { t } = useTranslation("landing-page");

  return (
    <AppWrapper>
      <div className="flex justify-center items-center gap-2 h-full w-full p-4">
        <Card className="max-w-5xl w-full p-6">
          <div className="flex justify-between gap-2">
            <h2 className="font-semibold">
              Select your language / Sélectionnez votre langue <br></br>
              <span className="text-xs font-normal">
                {t("versionText")} 1 (May 01 2025)
              </span>
            </h2>
            <LanguageSelectorHome />
          </div>

          <hr />
          <div className="space-y-3 text-sm">
            <p>{t("descriptionOne")}</p>
            <p>{t("descriptionTwo")}</p>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">{t("disclaimerTitle")}</h2>
            <div className="border border-foreground/20 p-3 max-h-[200px] min-h-[200px] overflow-y-scroll rounded">
              <p className="text-sm">
                <Trans
                  i18nKey="disclaimerText"
                  ns="landing-page"
                  components={{ br: <br /> }}
                />
              </p>
            </div>
          </div>

          <Button
            className="mx-auto -mt-2 w-[30%]"
            onClick={() => navigate("/farm-options")}
            variant={"primary"}
          >
            {t("common:okButton")}
          </Button>
        </Card>
      </div>
    </AppWrapper>
  );
}
