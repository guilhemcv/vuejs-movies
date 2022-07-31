<template>
  <DetailsVue :id="this.$route.params.id" :type="this.$route.params.type" />
  <p>{{ this.$route.params.id }}</p>
  <p>{{ this.$route.params.type }}</p>
</template>

<script>
import DetailsVue from '../components/Details.vue';
export default {
  components: {
    DetailsVue,
  },
};
</script>
