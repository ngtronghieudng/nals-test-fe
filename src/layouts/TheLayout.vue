<template>
  <div>
    <div class="px-0 container-fluid">
      <div class="row mx-0">
        <div :class="resize ? 'col-3' : 'col-1'" class="px-0">
          <TheSidebar :resize="this.resize" />
        </div>

        <div class="px-0" :class="resize ? 'col-9' : 'col-11'">
          <div class="bg">
            <router-view class="bg-text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TheHeader from '@/layouts/TheHeader.vue';
import TheSidebar from '@/layouts/TheSidebar.vue';

@Component({
  components: {
    TheHeader,
    TheSidebar,
  },
  created(this: TheLayout) {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy(this: TheLayout) {
    window.removeEventListener('resize', this.onResize);
  },
})
export default class TheLayout extends Vue {
  resize = true;
  resizeContainer = true;

  onResize(): void {
    if (window.innerWidth > 880) {
      this.resize = true;
    } else {
      this.resize = false;
    }

    if (window.innerWidth > 1460) {
      this.resizeContainer = true;
    } else {
      this.resizeContainer = false;
    }
  }
}
</script>

<style scoped>
.bg {
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
}

/* .bg {
  background-color: #395b64;
  height: 100%;
} */

.containerCustom {
  min-width: 1440px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
</style>
