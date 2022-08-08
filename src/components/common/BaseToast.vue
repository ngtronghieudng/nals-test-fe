<template>
  <div>
    <b-toast id="my-toast" variant="success" solid toaster="b-toaster-bottom-left">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Notification</strong>
          <small class="text-muted mr-2">a seconds ago</small>
        </div>
      </template>
      {{ text }}
    </b-toast>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class BaseToast extends Vue {
  @Prop({ default: '' }) type!: string;
  @Prop({ default: '' }) text!: string;
}
</script>

<style lang="scss" scoped>
.spinner-border {
  display: flex;
  margin: 0 auto;
}
</style>