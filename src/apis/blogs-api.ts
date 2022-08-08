// import axios from './base-api';

// class BlogsApi {
//   getBlogList(params: any): Promise<any> {
//     return axios.get('/api/v2/blogs', { params });
//   }
// }

// export default new BlogsApi();

import { BlogsDto } from '@/models/blogsDto';
import HttpService from './base-api';

export const GetList = (params: BlogsDto) => HttpService.get('/api/v2/blogs', params);

export const GetDetail = (id: string) => HttpService.get(`api/v2/blogs/${id}`);

export const PostBlog = ({ title, content, image }: any) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('content', content);
  formData.append('image', new Blob([image], { type: 'application/octet-stream' }));
  return HttpService.post('api/v2/blogs', formData);
};
