import { translate } from "fe-tools/lib/api/translate";

const DEFAULT_PAGE_SIZE = 5;

export const getFormattedPageSize = (newPageSize: string | null): number =>
  newPageSize ? parseInt(newPageSize, 10) : DEFAULT_PAGE_SIZE;

export const getFormattedPageCount = (
  pageIndex: number,
  pageSize: number,
  rowCount: number
): string => {
  const firstRowIndex = rowCount ? pageIndex * pageSize + 1 : 0;
  const clampedFirstRowIndex = Math.min(firstRowIndex, rowCount);
  const lastRowIndex = Math.min(clampedFirstRowIndex + pageSize - 1, rowCount);
  return translate("table.row.count", {
    start: clampedFirstRowIndex,
    end: lastRowIndex,
    total: rowCount,
  });
};

export const getNumOfRowsPerPageOptions = (
  totalNumOfRows: number,
  increment = DEFAULT_PAGE_SIZE
): string[] => {
  if (!totalNumOfRows) {
    return [increment.toString()];
  }
  const options: string[] = [];
  for (let i = increment; i - increment < totalNumOfRows; i += increment) {
    options.push(i.toString());
  }
  return options;
};
