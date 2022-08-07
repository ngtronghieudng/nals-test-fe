import { BaseApi } from '@/apis/base-api';
import { BlogsDto } from '@/models/blogsDto';

export default class BlogsApi extends BaseApi {
  getReleaseNotes() : Promise<any> {
    return this.axios.get('/api/homepage/get-all-release-note');
  }

  getBlogList(params: BlogsDto): Promise<any> {
    return this.axios.get('/api/v2/blogs', { params });
  }
}
