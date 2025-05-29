import React, { ReactElement, useEffect, useState } from "react";
import { ActionIcon, Group, Indicator, Stack, Text, SimpleGrid, rem } from "@mantine/core";
import { IconFilter, IconMaximize, IconMinimize, IconBaselineDensityMedium, IconBaselineDensitySmall, IconBaselineDensityLarge } from '@tabler/icons-react';
import { DatesRangeValue } from "@mantine/dates";
import {
  MRT_TableInstance as MRTTableInstance,
  MRT_ToggleFullScreenButton as MRTToggleFullScreenButton,
  MRT_ToggleDensePaddingButton as MRTToggleDensePaddingButton,
  MRT_ToolbarAlertBanner as BaseMRTToolbarAlertBanner,
  MRT_RowData,
} from "mantine-react-table";
import { translate } from '../translations';
import SelectFilter from "./SelectFilter";
import SearchFilter from "./SearchFilter";
import DateRangeSelector from "./DateRangeSelectorFilter";
import FilterChip from "./FilterChip";
import ResultCount from "./ResultCount/index";

export enum City {
  NEW_YORK = "New York",
  LOS_ANGELES = "Los Angeles",
  CHICAGO = "Chicago",
  SAN_FRANCISCO = "San Francisco",
  BOSTON = "Boston",
  SEATTLE = "Seattle",
  DENVER = "Denver",
  PORTLAND = "Portland",
  AUSTIN = "Austin",
  MIAMI = "Miami",
  PHOENIX = "Phoenix",
  LAS_VEGAS = "Las Vegas",
  DETROIT = "Detroit",
  NASHVILLE = "Nashville",
  ATLANTA = "Atlanta",
  ORLANDO = "Orlando",
  TAMPA = "Tampa",
  CHARLOTTE = "Charlotte",
  INDIANAPOLIS = "Indianapolis",
  COLUMBUS = "Columbus",
}

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

export interface Filters {
  cities?: City[] | null;
  dateRange?: DateRange | null;
  searchTerm?: string;
}

export interface CustomTopToolbarProps<T extends MRT_RowData> {
  filtersState: Filters;
  locale: string;
  onChange: (filters: Filters) => void;
  resultCount: number;
  numberOfSelectedRows: number;
  table: MRTTableInstance<T>;
  isLoading?: boolean;
  onFilterToggleChange: () => void;
  showFilters: boolean;
}

interface ExtendedAlertBannerProps<T extends MRT_RowData> {
  stackAlertBanner?: boolean;
  table: MRTTableInstance<T>;
  bg?: string;
  numberofselectedrows: number;
  style?: React.CSSProperties;
}

const MRTToolbarAlertBanner = BaseMRTToolbarAlertBanner as React.ComponentType<ExtendedAlertBannerProps<any>>;

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

interface FilterIconButtonProps {
  onClick: () => void;
  areFiltersShown: boolean;
}

const FilterIconButton = ({ onClick, areFiltersShown }: FilterIconButtonProps): ReactElement => (
  <ActionIcon
    data-testid="additional-filter-toggle"
    variant={areFiltersShown ? "outline" : undefined}
    onClick={onClick}
    aria-label={translate("table.filters.toggle.aria")}
    style={{
      color: 'var(--mantine-color-gray-7)',
      backgroundColor: 'var(--mantine-color-white)',
      borderColor: 'var(--mantine-color-gray-4)',
    }}
  >
    <IconFilter size={18} />
  </ActionIcon>
);

const CustomTopToolbar = <T extends MRT_RowData>({
  filtersState,
  locale,
  resultCount,
  onChange,
  table,
  numberOfSelectedRows,
  isLoading,
  showFilters,
  onFilterToggleChange,
}: CustomTopToolbarProps<T>): ReactElement => {
  console.log('CustomTopToolbar - Props:', { resultCount, isLoading });
  
  const { searchTerm, cities, dateRange } = filtersState;
  const [dateRangeSelectorRefreshKey, setDateRangeSelectorRefreshKey] = useState<number>(0);
  const [showFiltersState, setShowFiltersState] = useState(showFilters);

  useEffect(() => {
    if (dateRange === null) {
      setDateRangeSelectorRefreshKey(prev => prev + 1);
    }
  }, [dateRange]);

  const handleDateChange = (value: DatesRangeValue | null): void => {
    function isOnlyOneDateSelected(): boolean {
      return !!(value && (value[0] === null || value[1] === null));
    }

    function areBothDatesSelected(): boolean {
      return !!(value && value[0] !== null && value[1] !== null);
    }

    if (isOnlyOneDateSelected()) {
      return;
    }
    let range: DateRange | null = null;

    if (value !== null && areBothDatesSelected()) {
      let newEndDate = value[1];
      if (newEndDate) {
        const endOfDay = new Date(newEndDate);
        endOfDay.setHours(23, 59, 59, 999);
        newEndDate = endOfDay;
      }

      range = {
        start: value[0],
        end: value[1] ? newEndDate : value[1],
      };
    }
    onChange({
      dateRange: range,
    });
  };

  const areFiltersActive = (): boolean => {
    return Boolean(cities && cities.length > 0 || (dateRange && dateRange.start && dateRange.end));
  };

  const onToggleFilterClick = (): void => {
    const newShowFilters = !showFiltersState;
    setShowFiltersState(newShowFilters);
    onFilterToggleChange?.();
  };

  const clearFilters = (): void => {
    onChange({
      searchTerm,
      cities: null,
      dateRange: null,
    });
    setDateRangeSelectorRefreshKey(prev => prev + 1);
  };

  const hasActiveFilters = areFiltersActive();
  const isFullScreen = table.getState().isFullScreen ?? false;

  return (
    <>
      <Stack
        p="md"
        gap="xshalf"
        style={{
          borderBottom: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <SimpleGrid cols={2}>
          <Group gap="xs" align="center">
            {hasActiveFilters ? (
              <Indicator size="8">
                <FilterIconButton areFiltersShown={showFiltersState} onClick={onToggleFilterClick} />
              </Indicator>
            ) : (
              <FilterIconButton areFiltersShown={showFiltersState} onClick={onToggleFilterClick} />
            )}
            <SearchFilter
              searchTerm={searchTerm as string}
              onChange={(value): void =>
                onChange({
                  searchTerm: value,
                })
              }
            />
          </Group>
          <Group justify="end" gap="xs">
            <ActionIcon
              size={rem(30)}
              onClick={() => table.setIsFullScreen(!isFullScreen)}
              aria-label={isFullScreen ? "Exit fullscreen" : "Enter fullscreen"}
              style={{
                color: 'var(--mantine-color-gray-7)',
                backgroundColor: 'var(--mantine-color-white)',
                borderColor: 'var(--mantine-color-gray-4)',
              }}
            >
              {isFullScreen ? <IconMinimize size={18} /> : <IconMaximize size={18} />}
            </ActionIcon>
            <ActionIcon
              size={rem(30)}
              onClick={() => {
                const currentDensity = table.getState().density;
                const nextDensity = currentDensity === 'xs' ? 'md' : currentDensity === 'md' ? 'xl' : 'xs';
                table.setDensity(nextDensity);
              }}
              data-testid="toggle-dense-padding"
              aria-label="Toggle density"
              style={{
                color: 'var(--mantine-color-gray-7)',
                backgroundColor: 'var(--mantine-color-white)',
                borderColor: 'var(--mantine-color-gray-4)',
              }}
            >
              {(() => {
                switch (table.getState().density) {
                  case 'md':
                    return <IconBaselineDensityMedium size={18} />;
                  case 'xs':
                    return <IconBaselineDensitySmall size={18} />;
                  case 'xl':
                    return <IconBaselineDensityLarge size={18} />;
                  default:
                    return <IconBaselineDensityMedium size={18} />;
                }
              })()}
            </ActionIcon>
          </Group>
        </SimpleGrid>
        <Group justify="space-between">
          <Group gap="xs">
            {hasActiveFilters && (
              <>
                <Text
                  size="xs"
                  span
                  role="button"
                  fw={600}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={clearFilters}
                  c="blue"
                  data-testid="clear-filters"
                >
                  {translate("table.filters.clear.filters")}
                </Text>
                {cities && cities.map((city) => (
                  <FilterChip
                    key={city}
                    label={city}
                    onClick={(): void =>
                      onChange({
                        cities: cities.filter((c) => c !== city),
                      })
                    }
                  />
                ))}
                {filtersState.dateRange && (
                  <FilterChip
                    label={translate("table.filters.chip.date.range.label", {
                      startDate: filtersState.dateRange.start?.toLocaleDateString(
                        undefined,
                        dateOptions
                      ) || '',
                      endDate: filtersState.dateRange.end?.toLocaleDateString(
                        undefined,
                        dateOptions
                      ) || '',
                    })}
                    onClick={(): void =>
                      onChange({
                        dateRange: null,
                      })
                    }
                  />
                )}
              </>
            )}
            <ResultCount resultCount={resultCount} isLoading={isLoading ?? false} />
          </Group>
        </Group>
        {showFiltersState && (
          <SimpleGrid data-testid="additional-filters" cols={3} spacing="xs" role="menu">
            <DateRangeSelector
              key={dateRangeSelectorRefreshKey}
              label={translate("table.filters.applied.on")}
              locale={locale}
              onChange={handleDateChange}
            />
            <SelectFilter
              label={translate("table.filters.city")}
              onChange={(value): void => {
                onChange({
                  cities: value as City[] | null,
                });
              }}
              selectedValue={(cities as string[]) || null}
              data={[
                {
                  value: City.ATLANTA,
                  label: translate("table.filters.city.atlanta"),
                },
                {
                  value: City.AUSTIN,
                  label: translate("table.filters.city.austin"),
                },
                {
                  value: City.BOSTON,
                  label: translate("table.filters.city.boston"),
                },
                {
                  value: City.CHARLOTTE,
                  label: translate("table.filters.city.charlotte"),
                },
                {
                  value: City.CHICAGO,
                  label: translate("table.filters.city.chicago"),
                },
                {
                  value: City.COLUMBUS,
                  label: translate("table.filters.city.columbus"),
                },
                {
                  value: City.DENVER,
                  label: translate("table.filters.city.denver"),
                },
                {
                  value: City.DETROIT,
                  label: translate("table.filters.city.detroit"),
                },
                {
                  value: City.INDIANAPOLIS,
                  label: translate("table.filters.city.indianapolis"),
                },
                {
                  value: City.LAS_VEGAS,
                  label: translate("table.filters.city.las.vegas"),
                },
                {
                  value: City.LOS_ANGELES,
                  label: translate("table.filters.city.los.angeles"),
                },
                {
                  value: City.MIAMI,
                  label: translate("table.filters.city.miami"),
                },
                {
                  value: City.NASHVILLE,
                  label: translate("table.filters.city.nashville"),
                },
                {
                  value: City.NEW_YORK,
                  label: translate("table.filters.city.new.york"),
                },
                {
                  value: City.ORLANDO,
                  label: translate("table.filters.city.orlando"),
                },
                {
                  value: City.PHOENIX,
                  label: translate("table.filters.city.phoenix"),
                },
                {
                  value: City.PORTLAND,
                  label: translate("table.filters.city.portland"),
                },
                {
                  value: City.SAN_FRANCISCO,
                  label: translate("table.filters.city.san.francisco"),
                },
                {
                  value: City.SEATTLE,
                  label: translate("table.filters.city.seattle"),
                },
                {
                  value: City.TAMPA,
                  label: translate("table.filters.city.tampa"),
                },
              ]}
            />
          </SimpleGrid>
        )}
      </Stack>
      <MRTToolbarAlertBanner
        stackAlertBanner
        table={table}
        bg="blue"
        numberofselectedrows={numberOfSelectedRows}
        style={{
          borderRadius: 0,
          color: 'var(--mantine-color-white)',
          borderTop: '1px solid var(--mantine-color-blue-6)',
          padding: 'var(--mantine-spacing-xs)',
        }}
      />
    </>
  );
};

export default CustomTopToolbar;
