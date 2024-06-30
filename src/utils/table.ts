import { IDataType, TableOrder } from "../interface/common";

export const formatTableName = (name: string) => {
  const separatedBySpaceName = name.replace(/([A-Z])/g, " $1").trim();

  return separatedBySpaceName.charAt(0).toUpperCase() + separatedBySpaceName.slice(1);
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator<Key extends keyof IDataType>(
  order: TableOrder,
  orderBy: Key
): (a: IDataType, b: IDataType) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
