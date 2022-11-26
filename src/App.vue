<template>
  <LetterScreen />
</template>

<script>
import LetterScreen from './components/LetterScreen.vue';

export default {
  name: 'App',
  components: {
    LetterScreen,
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #F6676E;
  height: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  height: 100%;
}
</style>
