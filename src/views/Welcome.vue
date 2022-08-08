<template>
  <div>
    <section class="welcome">
      <div class="container-welcome">
        <a target="_blank" href="https://twitter.com/ReisnerShawn">
          <img class="social" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
        </a>
        <p class="mt-3 mb-1">Welcome</p>
        <p>My Blog</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Welcome',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Sofia');

.welcome {
  position: relative;
  width: 100%;
  float: right;
  height: 100vh;

  .container-welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  a {
    position: relative;

    img {
      width: 48px;
      height: 48px;
    }
  }

  p {
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 0.1em;
    color: #fff;
    font-weight: bold;
    font-family: 'Sofia';
    margin: 0;
  }
}
</style>