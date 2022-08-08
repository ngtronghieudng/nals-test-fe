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

export const PostBlog = (data: any) => HttpService.post('api/v2/blogs', data);

export const EditBlog = (id: string, data: any) => HttpService.put(`api/v2/blogs/${id}`, data);
