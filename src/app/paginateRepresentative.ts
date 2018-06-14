import { Representative } from './Representative';


export class PaginatedRep {
  current_page: number;
  data: Representative[];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}