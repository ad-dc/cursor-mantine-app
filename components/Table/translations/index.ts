import { translations, TranslationKey } from './en';

export const translate = (key: TranslationKey, params?: Record<string, string | number>): string => {
  const translation = translations[key];
  
  if (!translation) {
    console.warn('translate - No translation found for key:', key);
    return key;
  }

  if (!params) {
    return translation as string;
  }

  let result: string = translation;
  for (const [paramKey, value] of Object.entries(params)) {
    result = result.replace(`{${paramKey}}`, String(value));
  }
  return result;
};

export { translations };
export type { TranslationKey }; 