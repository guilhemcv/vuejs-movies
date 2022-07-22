<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header
    class="flex flex-col items-center justify-between md:flex-row md:items-center md:h-20 bg-slate-900 opacity-90"
  >
    <div class="flex flex-col items-center w-11/12 mt-5 ml-5 md:mt-0 md:flex-row justify-left">
      <img class="logo" src="./assets/images/netflix.png" alt="" />

      <nav class="flex flex-col items-center justify-around w-9/12 mb-2 md:mb-0 md:flex-row">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/series">Séries</RouterLink>
        <RouterLink to="/films">Films</RouterLink>
        <RouterLink to="/best">Les plus consultés</RouterLink>
      </nav>
    </div>
    <img class="mb-5 ml-5 md:mr-5 md:mb-0" src="./assets/images/loupe.png" alt="" />
  </header>

  <RouterView />
  <footer
    class="flex items-center justify-between h-12 text-sm font-bold text-white bg-slate-900"
  >
    <p class="ml-10 text-sm text-white">Copyright 2022 - Guilhem SEYVET</p>
    <div class="flex items-center justify-around w-24 mr-10">
      <a href="https://www.linkedin.com/in/guilhem-seyvet/" target="_blank">
        <img width="25" src="./assets/images/logo-linkedin.png" alt="linkedin" />
      </a>
      <a href="https://www.github.com/guilhemcv/" target="_blank">
        <img width="25" src="./assets/images/logo-github.png" alt="github" />
      </a>
    </div>
  </footer>
</template>
