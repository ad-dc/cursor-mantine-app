const translations = {
  // Result count translations
  "table.filters.result.count.many": "{count} results",
  "table.filters.result.count.one": "1 result",
  "table.filters.result.count.loading": "Loading results...",

  // Total count translations (no filters active)
  "table.filters.result.count.total.many": "{count} records",
  "table.filters.result.count.total.one": "1 record",

  // Filtered count translations (filters active)
  "table.filters.result.count.filtered.many": "{count} records",
  "table.filters.result.count.filtered.one": "1 record",
  "table.filters.result.count.filtered.none": "0 records",

  // Filter translations
  "table.filters.toggle.aria": "Toggle filters panel",
  "table.filters.clear.filters": "Clear filters",
  "table.filters.chip.date.range.label": "{startDate} - {endDate}",
  "table.filters.date.range.week": "This week",
  "table.filters.date.range.month": "This month",
  "table.filters.date.range.quarter": "This quarter",
  "table.filters.date.range.custom": "Custom",
  "table.filters.date.range.select": "Select a date",
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
  "table.filters.show.all": "Show all",
  "table.filters.placeholder.all": "All",
  "table.filters.placeholder.select.more": "Select more",
  "table.search.placeholder": "Search...",

  // FilterSystem translations
  "table.filters.system.validation.max.exceeded": "Maximum {maxFilters} filters allowed, but {filterCount} provided",
  "table.filters.system.validation.duplicate.ids": "Duplicate filter IDs found: {duplicateIds}",
  "table.filters.system.validation.missing.id": "Filter missing required \"id\" field",
  "table.filters.system.validation.missing.label": "Filter \"{filterId}\" missing label",
  "table.filters.system.validation.title": "Filter Configuration Error",
  "table.filters.system.overflow.warning": "Only first {maxFilters} filters shown. {hiddenCount} filters hidden.",
  "table.filters.system.clear.aria": "Clear {filterLabel}",
  
  // Generic filter placeholders
  "table.filters.placeholder.select.option": "Select an option",
  "table.filters.placeholder.select.options": "Select options",
  "table.filters.placeholder.date.range": "Select date range",
  
  // Example filter labels (for demonstration)
  "table.filters.label.status": "Status",
  "table.filters.label.department": "Department",
  "table.filters.label.skills": "Skills",
  "table.filters.label.date.applied": "Date Applied",
  "table.filters.label.last.login": "Last Login",
  
  // Example filter options
  "table.filters.status.active": "Active",
  "table.filters.status.inactive": "Inactive", 
  "table.filters.status.pending": "Pending",
  "table.filters.status.suspended": "Suspended",
  
  "table.filters.department.engineering": "Engineering",
  "table.filters.department.sales": "Sales",
  "table.filters.department.marketing": "Marketing",
  "table.filters.department.hr": "Human Resources",
  
  "table.filters.skills.javascript": "JavaScript",
  "table.filters.skills.typescript": "TypeScript",
  "table.filters.skills.react": "React",
  "table.filters.skills.node": "Node.js",
  "table.filters.skills.python": "Python",

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

export type TranslationKey = keyof typeof translations;
export type TranslationValue = typeof translations[TranslationKey];
export { translations }; 