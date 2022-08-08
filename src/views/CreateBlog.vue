<template>
  <div class="create-blog">
    <div class="container">
      <FormBlog @submitted="formData" />
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
export default class CreateBlog extends Vue {
  formData(data: any) {
    console.log(data, '===================');
  }
}
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