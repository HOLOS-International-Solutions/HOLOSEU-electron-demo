export enum LanguagesEnum {
  en = "English / Anglais",
  fr = "French / Français",
}

export type Languages = keyof typeof LanguagesEnum;

export const languages = Object.freeze({
  en: { code: "en", lang: LanguagesEnum.en },
  fr: { code: "fr", lang: LanguagesEnum.fr },
} as const);
