import { BaseDto } from './baseDto';

export interface BlogsDto extends BaseDto {
  page?: number;
  offset?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: string;
}
