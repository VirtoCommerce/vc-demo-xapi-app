export const sortDescending = 'desc';
export const sortAscending = 'asc';
export const pageInfo = {
  pageSize: 10,
  cursor: '0',
  page: 1,
};

export interface SortInfo {
  column: string;
  direction: string;
}

export function getSortingExpression(sort: SortInfo): string {
  return `${sort.column}:${sort.direction}`;
}
