<template>
  <div>
    <button
      type="button"
      :class="{
        btn: true,
        [`btn-${colorType}`]: true,
      }"
      @click="$emit('on-click')"
      :disabled="disabled"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class BaseButton extends Vue {
  @Prop({ default: '' }) text!: string;
  @Prop({ default: 'info' }) colorType!: string;
  @Prop({ default: false }) disabled!: boolean;
}
</script>

<style lang="scss" scoped>
.spinner-border {
  display: flex;
  margin: 0 auto;
}
</style>