<template>
  <div>
    <aside class="sidebar">
      <nav class="nav">
        <ul>
          <li><router-link to="/">Welcome</router-link></li>
          <li><router-link to="/blogs">Blogs</router-link></li>
          <li><router-link to="/create-blog">Create Blog</router-link></li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class BaseSidebar extends Vue {}
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

.nav {
  position: relative;
  margin: 0 15%;
  text-align: right;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
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

.active {
  color: white !important;
}
</style>
