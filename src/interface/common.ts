export interface SideBarItemFunction {
  name: string;
}

export interface SideBarItem {
  name: string;
  functions: SideBarItemFunction[];
}

export interface IDataType {
  [key: string | symbol]: string | number | boolean;
}

export type TableOrder = "asc" | "desc";
