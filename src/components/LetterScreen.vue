<template>
  <div class="container">
    <h1 class="title">{{ formattedName }},</h1>
    <div class="text">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'LetterScreen',
  props: {
    name: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: 'Eres muy guapa :)',
    },
  },
  computed: {
    formattedName() {
      return this.name === ''
        ? 'Mon Amour'
        : this.capitalizeFirstLetter(this.name);
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
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
