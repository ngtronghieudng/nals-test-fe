<template>
  <div>
    <label>{{ label }}</label>
    <select class="custom-select form-control-sm" v-model="vm">
      <option v-for="(item, index) in selectOption" :key="`order-${index}`" :value="item.value">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({
  mounted(this: BaseSelect) {
    this.vm = this.defaultValue;
  },
})
export default class BaseSelect extends Vue {
  @Prop({ default: '' }) label!: string;
  @Prop({ default: [] }) selectOption!: string[];
  @Prop({ default: '' }) defaultValue!: string;

  vm: any = '';

  @Watch('vm')
  vmChanged(newVal: string) {
    this.$emit('vm', newVal);
  }
}
</script>

<style lang="scss" scoped>
.spinner-border {
  display: flex;
  margin: 0 auto;
}

label {
  font-weight: 500;
  color: #fff;
}
</style>