import { Transaction } from './Transaction';

export class PaginatedTran {
  current_page: number;
  data: Transaction[];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}