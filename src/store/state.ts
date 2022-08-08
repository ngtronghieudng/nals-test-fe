import { BlogsDto } from '@/models/blogsDto';

export interface State {
  blogs: BlogsDto
}

const state: State = {
  blogs: {}
};

export default state;
