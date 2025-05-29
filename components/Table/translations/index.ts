import { translations, TranslationKey } from './en';

export const translate = (key: TranslationKey, params?: Record<string, string | number>): string => {
  console.log('translate - Input:', { key, params });
  console.log('translate - Available translations:', translations);
  
  const translation = translations[key];
  console.log('translate - Found translation:', translation);
  
  if (!translation) {
    console.warn('translate - No translation found for key:', key);
    return key;
  }

  if (!params) {
    console.log('translate - No params, returning translation:', translation);
    return translation;
  }

  let result = translation;
  for (const [key, value] of Object.entries(params)) {
    result = result.replace(`{${key}}`, String(value));
  }
  console.log('translate - Final result:', result);
  return result as unknown as string;
};

export { translations };
export type { TranslationKey }; 