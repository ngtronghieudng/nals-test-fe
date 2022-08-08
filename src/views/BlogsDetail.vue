<template>
  <div>
    <div class="card border-0">
      <div class="card-body">
        <h5 class="card-title">{{ detail.title }}</h5>
        <img
          height="200px"
          class="card-img-bottom mb-2"
          :src="detail.image.url"
          alt="Card image cap"
          style="object-fit: contain"
        />
        <p class="card-text">
          {{ detail.content }}
        </p>
        <p class="card-text">
          <small class="text-muted">{{ detail.created_at }}</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { GetDetail } from '@/apis/blogs-api';

@Component({
  name: 'ListBlogs',
})
export default class Blogs extends Vue {
  detail: any = {};

  get idBlock(): string {
    return this.$route.params.id;
  }

  created() {
    this.getDetailBlog();
  }

  getDetailBlog(): void {
    GetDetail(this.idBlock).then((res: any) => {
      this.detail = res.data;
    });
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100vh;
  background-color: #e7f6f2;
  width: 70%;
  margin: 0 auto;
}
</style>