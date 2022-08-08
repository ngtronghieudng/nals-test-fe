<template>
  <ValidationObserver ref="observer" v-slot="{ invalid }">
    <div class="row">
      <div class="col-4">
        <div class="card bg-light">
          <div class="card-body">
            <div class="text-center mb-4">
              <img
                v-if="previewImage"
                class="image-css"
                :src="previewImage"
                width="100%"
                height="350px"
                style="object-fit: cover"
              />
              <i v-else class="fal fa-image" style="font-size: 120px; color: rgba(44, 51, 51, 0.27)" />
            </div>

            <div class="text-center">
              <input style="display: none" ref="uploadImage" type="file" @change="uploadImage" />
              <button class="btn btn-light text-primary" @click="$refs.uploadImage.click()" type="text">
                Upload image
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="form-group">
          <label for="title">Title *</label>
          <ValidationProvider name="title" rules="required" v-slot="{ errors }">
            <input
              type="text"
              v-model="blog.title"
              id="title"
              class="form-control"
              :class="{ 'is-invalid': errors[0] }"
            />
            <div v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>

        <div class="form-group">
          <label for="content">Content *</label>
          <ValidationProvider name="content" rules="required" v-slot="{ errors }">
            <textarea
              type="text"
              v-model="blog.content"
              id="content"
              class="form-control"
              rows="10"
              :class="{ 'is-invalid': errors[0] }"
            />
            <div v-if="errors[0]" class="invalid-feedback">{{ errors[0] }}</div>
          </ValidationProvider>
        </div>

        <div class="form-group text-right">
          <button class="btn btn-primary" :disabled="invalid" @click="onSubmit()">Submit</button>
          <!-- <BaseButton :colorType="'info'" :text="'Submit'" @on-click="handleSubmit" :disabled="" /> -->
        </div>
      </div>
    </div>
  </ValidationObserver>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { PostBlog, GetDetail, EditBlog } from '@/apis/blogs-api';

@Component({
  name: 'FormBlogs',
  components: {},
})
export default class FormBlog extends Vue {
  @Prop() typeForm!: string;

  blog: any = {
    title: '',
    content: '',
    image: '',
  };

  submitted: boolean = false;
  previewImage = '';

  get isEdit(): boolean {
    return this.typeForm === 'edit';
  }

  get idBlock(): string {
    return this.$route.params.id;
  }

  created() {
    if (!this.isEdit) return;
    this.getBlogById();
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('blog[title]', this.blog.title);
    formData.append('blog[content]', this.blog.content);
    formData.append('blog[image]', this.blog.image.url && this.isEdit ? '' : this.blog.image);

    if (this.isEdit) {
      this.editBlog(formData);
    } else {
      this.createBlog(formData);
    }
  }

  createBlog(formData: any) {
    PostBlog(formData).then((res) => {
      console.log('res======', res);
    });
  }

  editBlog(formData: any) {
    EditBlog(this.idBlock, formData).then((res) => {
      console.log('res======', res);
    });
  }

  getBlogById() {
    GetDetail(this.idBlock).then((res) => {
      this.blog = res.data;
      this.previewImage = res.data.image.url;
    });
  }

  uploadImage(e: any) {
    const files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;
    const file = files[0];

    // Validate image
    // if (this.imageType.indexOf(file.type) === -1) {
    //   this.$message.error({ message: this.$tc('error_type_image') });
    //   return;
    // }

    // if (file.size > this.imageSize * 1024 * 1024) {
    //   this.$message.error({
    //     message: this.message ? this.message : this.$tc('error_size_image', 1, { size: `${this.imageSize}MB` }),
    //   });
    //   return;
    // }

    this.createImage(file);
  }

  createImage(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      this.previewImage = e.target.result;
      this.blog.image = file;
    };
  }
}
</script>
