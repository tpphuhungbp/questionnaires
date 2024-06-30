import { IDataType } from "./common";

export interface Questionnarie extends IDataType {
  id: string;
  name: string;
  createdDate: string;
  lastModified: string;
  effectiveDate: string;
  version: string;
  status: string;
}
