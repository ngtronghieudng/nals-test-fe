<template>
  <div class="container">
    <div class="edit-blog">
      <FormBlog :typeForm="'edit'" />
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
export default class EditBlog extends Vue {}
</script>

<style scoped>
.edit-blog {
  height: 100vh;
  display: grid;
  align-items: center;
  width: 100%;
}
</style>