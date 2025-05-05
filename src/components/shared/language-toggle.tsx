import { Languages, languages } from "@/types/i18n";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const languageCodes = Object.keys(languages) as Languages[];

  const toggleLanguage = () => {
    const currentIndex = languageCodes.indexOf(i18n.language as Languages);
    const nextIndex = (currentIndex + 1) % languageCodes.length;
    const nextLanguage = languageCodes[nextIndex];
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <Button
      onClick={toggleLanguage}
      size={"sm"}
      variant={"ghost"}
      title="Toggle Language"
      className="text-primary-foreground hover:text-primary-foreground mr-2 text-xs hover:bg-transparent border-transparent hover:border-primary-foreground border"
      style={{
        ...({ "-webkit-app-region": "no-drag" } as React.CSSProperties),
      }}
    >
      {languages[i18n.language as Languages].code.toUpperCase()}
    </Button>
  );
}
