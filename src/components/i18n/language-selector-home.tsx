import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages, languages } from "@/types/i18n";
import { useTranslation } from "react-i18next";

export default function LanguageSelectorHome() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: Languages) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select
      value={i18n.language}
      onValueChange={(value) => handleLanguageChange(value as Languages)}
    >
      <SelectTrigger className="w-[300px]">
        <SelectValue defaultValue={i18n.language} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([key, value]) => (
          <SelectItem key={key} value={value.code}>
            {value.lang}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
