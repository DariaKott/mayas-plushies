export const LANGUAGES = ["en", "ru", "me"] as const;

export type Language = (typeof LANGUAGES)[number];

export type LocalizedText = Record<Language, string>;

export function isValidLanguage(value: string): value is Language {
  return LANGUAGES.includes(value as Language);
}
