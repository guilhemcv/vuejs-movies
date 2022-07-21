<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header
    class="flex h-20 bg-slate-900 opacity-90 items-center justify-between"
  >
    <div class="flex ml-5 w-11/12 justify-left">
      <img class="logo" src="./assets/images/netflix.png" alt="" />

      <nav class="flex justify-around w-9/12">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/series">Séries</RouterLink>
        <RouterLink to="/films">Films</RouterLink>
        <RouterLink to="/best">Les plus consultés</RouterLink>
      </nav>
    </div>
    <img class="mr-5" src="./assets/images/loupe.png" alt="" />
  </header>

  <RouterView />
  <footer
    class="h-12 flex justify-center items-center bg-slate-900 text-sm font-bold text-white opacity-40"
  >
    <p class="text-sm">Copyright 2022 - Guilhem SEYVET</p>
  </footer>
</template>
