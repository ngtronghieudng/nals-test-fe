<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      type="text"
      v-model="vm"
      v-validate="required ? 'required' : ''"
      :id="name"
      :name="name"
      class="form-control"
      :class="{ 'is-invalid': submitted && errors.has(`${name}`) }"
      :placeholder="placeholder"
    />
    <div v-if="submitted && errors.has(`${name}`)" class="invalid-feedback">{{ errors.first(`${name}`) }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class BaseInput extends Vue {
  @Prop({ default: '' }) label!: string;
  @Prop({ default: false }) required!: boolean;
  @Prop({ default: '' }) name!: string;
  @Prop({ default: '' }) placeholder!: string;
  @Prop({ default: false }) submitted!: boolean;

  vm: any = '';

  @Watch('vm')
  vmChange(newVal: string) {
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