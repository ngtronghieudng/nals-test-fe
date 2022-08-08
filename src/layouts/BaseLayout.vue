<template>
  <div>
    <div class="container-fluid px-0">
      <div class="row mx-0">
        <div class="col-3 px-0">
          <BaseSidebar />
        </div>

        <div class="col-9 px-0">
          <div class="bg">
            <!-- <BaseHeader /> -->
            <router-view class="bg-text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BaseHeader from '@/components/common/BaseHeader.vue';
import BaseSidebar from '@/components/common/BaseSidebar.vue';

@Component({
  components: {
    BaseHeader,
    BaseSidebar,
  },
})
export default class BaseLayout extends Vue {}
</script>

<style scoped>
/* .bg {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80');
}

.bg:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.bg-text {
  position: relative;
  z-index: 1;
} */

.bg {
  background-color: #395b64;
  height: 100%;
}
</style>
