<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="text">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'LetterScreen',
  props: {
    title: {
      type: String,
      default: 'Mon amour',
    },
    message: {
      type: String,
      default: 'Eres muy guapa :)',
    },
  }
}
</script>

<style scoped>
div {
  background: url('~@/assets/bg.png') no-repeat center center fixed;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Just Another Hand', cursive;
  position: relative;
}

h1.title {
    color: #C23746;
    font-size: 3.2em;
    margin: 0;
}

.text {
    color: #F6676E;
    font-size: 2.2em;
    margin-top: 25px;
    margin-left: 5%;
    letter-spacing: 1px;
}

.container {
    padding: 180px 20%;
    padding-bottom: 0;
}
</style>
