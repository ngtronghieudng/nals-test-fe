<template>
  <div>
    <div
      v-if="isLoading"
      :class="{
        'spinner-border': true,
        [`text-${colorType}`]: true,
      }"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class BaseSpinner extends Vue {
  @Prop({ default: false }) isLoading!: boolean;
  @Prop({ default: 'light' }) colorType!: string;
}
</script>

<style lang="scss" scoped>
.spinner-border {
  display: flex;
  margin: 0 auto;
}
</style>