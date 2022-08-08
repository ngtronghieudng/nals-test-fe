<template>
  <div class="container">
    <div class="create-blog">
      <FormBlog />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FormBlog from '@/components/blogs/FormBlog.vue';

@Component({
  components: {
    FormBlog,
  },
})
export default class CreateBlog extends Vue {}
</script>

<style scoped>
.create-blog {
  height: 100vh;
  display: grid;
  align-items: center;
  width: 100%;
}
</style>