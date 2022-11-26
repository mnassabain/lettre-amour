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
      required: true,
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
