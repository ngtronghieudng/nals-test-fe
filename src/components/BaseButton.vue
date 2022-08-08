<template>
  <div>
    <button
      type="button"
      :class="{
        btn: true,
        [`btn-${colorType}`]: true,
      }"
      @click="$emit('on-click')"
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
}
</script>

<style lang="scss" scoped>
.spinner-border {
  display: flex;
  margin: 0 auto;
}
</style>