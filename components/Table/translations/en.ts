const translations = {
  // Result count translations
  "table.filters.result.count.many": "{count} results",
  "table.filters.result.count.one": "1 result",
  "table.filters.result.count.loading": "Loading results...",

  // Filter translations
  "table.filters.toggle.aria": "Toggle filters panel",
  "table.filters.clear.filters": "Clear filters",
  "table.filters.chip.date.range.label": "{startDate} - {endDate}",
  "table.filters.applied.on": "Applied On",
  "table.filters.city": "City",
  "table.filters.city.atlanta": "Atlanta",
  "table.filters.city.austin": "Austin",
  "table.filters.city.boston": "Boston",
  "table.filters.city.charlotte": "Charlotte",
  "table.filters.city.chicago": "Chicago",
  "table.filters.city.columbus": "Columbus",
  "table.filters.city.denver": "Denver",
  "table.filters.city.detroit": "Detroit",
  "table.filters.city.indianapolis": "Indianapolis",
  "table.filters.city.las.vegas": "Las Vegas",
  "table.filters.city.los.angeles": "Los Angeles",
  "table.filters.city.miami": "Miami",
  "table.filters.city.nashville": "Nashville",
  "table.filters.city.new.york": "New York",
  "table.filters.city.orlando": "Orlando",
  "table.filters.city.phoenix": "Phoenix",
  "table.filters.city.portland": "Portland",
  "table.filters.city.san.francisco": "San Francisco",
  "table.filters.city.seattle": "Seattle",
  "table.filters.city.tampa": "Tampa",

  // Sort translations
  "table.sort.aria": "Sort {column} {direction}",
  "table.sort.asc": "ascending",
  "table.sort.desc": "descending",
  "table.sort.none": "none",

  // Pagination translations
  "table.pagination.showing": "Showing {start}-{end} of {total}",
  "table.pagination.page": "Page {current} of {total}",
  "table.rows.per.page": "Rows per page",

  // Selection translations
  "table.selected.rows": "{count} rows selected",
  "table.selected.row": "1 row selected",
  "table.clear.selection": "Clear selection",
} as const;

console.log('Translations loaded:', translations);

export type TranslationKey = keyof typeof translations;
export type TranslationValue = typeof translations[TranslationKey];
export { translations }; 