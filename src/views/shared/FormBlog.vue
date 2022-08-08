<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input
        type="text"
        v-model="blog.title"
        v-validate="'required'"
        id="title"
        name="title"
        class="form-control"
        :class="{ 'is-invalid': submitted && errors.has('title') }"
      />
      <div v-if="submitted && errors.has('title')" class="invalid-feedback">{{ errors.first('title') }}</div>
    </div>

    <div class="form-group">
      <label for="content">Content</label>
      <input
        type="text"
        v-model="blog.content"
        v-validate="'required'"
        id="content"
        name="content"
        class="form-control"
        :class="{ 'is-invalid': submitted && errors.has('content') }"
      />
      <div v-if="submitted && errors.has('content')" class="invalid-feedback">{{ errors.first('content') }}</div>
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <input
        type="file"
        ref="uploadImage"
        id="image"
        name="image"
        class="form-control-file"
        :class="{ 'is-invalid': submitted && errors.has('image') }"
        @change="uploadImage"
      />
      <div v-if="submitted && errors.has('image')" class="invalid-feedback">{{ errors.first('image') }}</div>
    </div>

    <div class="form-group">
      <!-- <button class="btn btn-primary">Submit</button> -->
      <BaseButton :colorType="'info'" :text="'Submit'" @on-click="handleSubmit" />
    </div>
  </form>
</template>
<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: 'FormBlog',
  components: {
    BaseButton,
  },
  data() {
    return {
      blog: {
        title: '',
        content: '',
        image: '',
      },
      submitted: false,
    };
  },
  props: {
    imageType: {
      require: true,
      default: 'image/jpeg,image/png,image/jpg,image/gif',
      type: String,
    },
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          console.log(this.$refs.uploadImage, '==========');
          this.$emit('submitted', this.blog);
        }
      });
    },
    uploadImage(e) {
      const files = e.target.files || e.dataTransfer.files;
      console.log(files, '=========files');

      if (!files.length) return;
      const file = files[0];

      if (this.imageType.indexOf(file.type) === -1) {
        this.$message.error({ message: this.$tc('error_type_image') });
        return;
      }

      if (file.size > this.imageSize * 1024 * 1024) {
        this.$message.error({
          message: this.message ? this.message : this.$tc('error_size_image', 1, { size: `${this.imageSize}MB` }),
        });
        return;
      }

      this.createImage(file);
    },
    createImage(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        this.updateData(file, e.target.result);
      };
    },
  },
};
</script>