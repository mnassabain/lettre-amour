<template>
  <LetterScreen
    :name="name"
  />
</template>

<script>
import LetterScreen from '@/components/LetterScreen.vue';

export default {
  name: 'LetterView',
  components: {
    LetterScreen,
  },
  data() {
    return {
      name: 'Mon Amour',
      message: 'Ayyy mi amoooor',
    }
  },
  created() {
    this.name = this.getNameFromRoute();
  },
  methods: {
    getNameFromRoute() {
      const routeParams = this.$route.params;
      return routeParams.name;
    }
  }
}
</script>
