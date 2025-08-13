
/**
 * Month container for dataset
 */
interface MonthData {
  month: string;
  postedPending: number;
  postedApproved: number;
  postedDenied: number;
  claimedPending: number;
  claimedApproved: number;
  claimedDenied: number;
  [key: string]: string | number;
}

/**
 * Info about an employee
 */
export interface Employee {
  name: string;
  code: string;
  manager: boolean;
  dataset: MonthData[];
}