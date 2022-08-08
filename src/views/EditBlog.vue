<template>
  <div class="create-blog mt-5">
    <div class="px-5">
      <FormBlog :typeForm="'edit'" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FormBlog from './shared/FormBlog.vue';

@Component({
  components: {
    FormBlog,
  },
})
export default class EditBlog extends Vue {}
</script>

<style scoped>
.create-blog {
  height: 100vh;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
}
</style>