// Local translation function
const translate = (key: string, params?: Record<string, any>) => {
  if (!params) return key;
  return Object.entries(params).reduce((str, [key, value]) => {
    return str.replace(`{${key}}`, String(value));
  }, key);
};

export enum Preset {
  WEEK = "week",
  MONTH = "month",
  QUARTER = "quarter",
  CUSTOM = "custom",
}

export const getPresetLabel = (preset: string): string => {
  switch (preset) {
    case Preset.WEEK:
      return translate("table.filters.date.range.week");
    case Preset.MONTH:
      return translate("table.filters.date.range.month");
    case Preset.QUARTER:
      return translate("table.filters.date.range.quarter");
    case Preset.CUSTOM:
      return translate("table.filters.date.range.custom");
    default:
      return "";
  }
};

export const getPresets = () => [
  {
    value: Preset.WEEK,
    label: translate("table.filters.date.range.week"),
  },
  {
    value: Preset.MONTH,
    label: translate("table.filters.date.range.month"),
  },
  {
    value: Preset.QUARTER,
    label: translate("table.filters.date.range.quarter"),
  },
  {
    value: Preset.CUSTOM,
    label: translate("table.filters.date.range.custom"),
  },
];

export const getDateRangeFromPreset = (preset: string): [Date, Date] | null => {
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);

  switch (preset) {
    case Preset.WEEK:
      const startOfWeek = new Date(startOfDay);
      startOfWeek.setDate(today.getDate() - today.getDay());
      const endOfWeek = new Date(endOfDay);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return [startOfWeek, endOfWeek];

    case Preset.MONTH:
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
      return [startOfMonth, endOfMonth];

    case Preset.QUARTER:
      const quarter = Math.floor(today.getMonth() / 3);
      const startOfQuarter = new Date(today.getFullYear(), quarter * 3, 1);
      const endOfQuarter = new Date(today.getFullYear(), (quarter + 1) * 3, 0, 23, 59, 59, 999);
      return [startOfQuarter, endOfQuarter];

    default:
      return null;
  }
};
