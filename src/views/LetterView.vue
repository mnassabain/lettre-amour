<template>
  <LetterScreen
    :name="name"
    :message="message"
  />
</template>

<script>
import LetterScreen from '@/components/LetterScreen.vue';
import messages from '@/json/phrases.json';

export default {
  name: 'LetterView',
  components: {
    LetterScreen,
  },
  data() {
    return {
      name: '',
      message: '',
    }
  },
  created() {
    this.name = this.getNameFromRoute();
    this.message = this.getRandomMessage();
  },
  methods: {
    getNameFromRoute() {
      const routeParams = this.$route.params;
      return routeParams.name;
    },
    getRandomMessage() {
      return this.getRandomElementFromArray(messages);
    },
    getRandomElementFromArray(array) {
      let randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
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
</style>
