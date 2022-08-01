<template>
  <DetailsVue :id="this.$route.params.id" :type="this.$route.params.type" />
 <p class="mt-40 text-2xl font-bold text-center">Patientez, chargement en cours...</p>
</template>

<script>
import DetailsVue from '../components/Details.vue';
export default {
  components: {
    DetailsVue,
  },
};
</script>
