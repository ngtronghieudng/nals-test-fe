import { BaseDto } from './baseDto';

export interface BlogsDto extends BaseDto {
  page?: number | null;
  offset?: number | null;
  search?: string | null;
  sortBy?: string | null;
  sortDirection?: string | null;
}

export interface PaginationDto {
  count: number,
  next: number,
  offset: number,
  page: number,
  prev: number | null,
  total: number,
}

export interface ItemsDto extends BaseDto {
  comments_count: number,
  content: string,
  created_at: string,
  image?: { url?: string }
  title: string
  updated_at: string
}