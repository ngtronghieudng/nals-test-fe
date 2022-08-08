<template>
  <div>
    <div class="card border-0">
      <div class="card-body">
        <div v-if="!isLoading">
          <h5 class="card-title">{{ detail.title }}</h5>
          <img
            height="200px"
            class="card-img-bottom mb-2"
            :src="detail && detail.image && detail.image.url"
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

        <BaseSpinner :is-loading="isLoading" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { GetDetail } from '@/apis/blogs-api';
import BaseSpinner from '@/components/common/BaseSpinner.vue';

@Component({
  components: {
    BaseSpinner,
  },
})
export default class BlogsDetail extends Vue {
  detail: any = {};
  isLoading = false;

  get idBlock(): string {
    return this.$route.params.id;
  }

  created() {
    this.getDetailBlog();
  }

  getDetailBlog(): void {
    this.isLoading = true;
    GetDetail(this.idBlock).then((res: any) => {
      this.detail = res.data;
      this.isLoading = false;
    });
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100vh;
  background-color: #f1f1f1;
  width: 70%;
  margin: 0 auto;
}
</style>