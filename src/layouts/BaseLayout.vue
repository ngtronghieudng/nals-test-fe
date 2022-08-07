<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2">
          <BaseSidebar />
        </div>

        <div class="col-10">
          <BaseHeader />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseSidebar from '@/components/BaseSidebar.vue';

@Component({
  components: {
    BaseHeader,
    BaseSidebar
  }
})
export default class BaseLayout extends Vue {

}
</script>

<style>

</style>
