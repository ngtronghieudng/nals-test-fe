<template>
  <div>
    <aside :class="resize ? 'sidebar' : 'sidebarCollapse'">
      <nav :class="resize ? 'nav' : 'navCollapse'">
        <ul>
          <li>
            <router-link to="/"><span v-html="welcome()"></span></router-link>
          </li>
          <li>
            <router-link to="/blog-list"><span v-html="blogs()"></span></router-link>
          </li>
          <li>
            <router-link to="/create-blog"><span v-html="createBlog()"></span></router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class TheSidebar extends Vue {
  @Prop({ default: true }) resize!: boolean;

  welcome() {
    return this.resize ? 'Welcome' : '<i class="bi bi-house-door"></i>';
  }

  blogs() {
    return this.resize ? 'Blogs' : '<i class="bi bi-book"></i>';
  }

  createBlog() {
    return this.resize ? 'Create Blog' : '<i class="bi bi-journal-plus"></i>';
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html {
  font-family: Arial;
  font-size: 16px;
}

.sidebar {
  height: 100vh;
  background: #2c3333;
  font-size: 0.65em;
  width: 25%;
  position: fixed;
}

.sidebarCollapse {
  height: 100vh;
  background: #2c3333;
  font-size: 0.65em;
  width: 10%;
  position: fixed;
}

.nav {
  position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
}

.navCollapse {
  position: relative;
  // margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  max-width: 100%;
}

.nav ul {
  list-style: none;

  li {
    position: relative;
    margin: 3.2em 0;

    a {
      line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#fff, 0.35);
      display: block;
      transition: all ease-out 300ms;
    }

    &.active a {
      color: white;
    }

    &:not(.active)::after {
      opacity: 0.2;
    }

    &:not(.active):hover a {
      color: rgba(#fff, 0.75);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(to right, #5e42a6, #b74e91);
    }
  }
}

.navCollapse ul {
  list-style: none;
  padding: 0;

  li {
    position: relative;
    margin: 0.5em 0;

    a {
      width: 60px;
      line-height: 5em;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.4em;
      color: rgba(#fff, 0.35);
      display: block;
      transition: all ease-out 300ms;
      font-size: 14px;
      text-align: center;
    }

    &.active a {
      color: white;
    }

    &:not(.active)::after {
      opacity: 0.2;
    }

    &:not(.active):hover a {
      color: rgba(#fff, 0.75);
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2em;
      background: black;
      left: 0;
      bottom: 0;
      background-image: linear-gradient(to right, #5e42a6, #b74e91);
    }
  }
}

.active {
  color: white !important;
}
</style>
