<template>
  <header
    class="fixed top-0 left-0 z-50 flex flex-col items-center justify-between w-screen h-auto md:flex-row md:items-center md:h-20 bg-slate-800 opacity-90"
  >
    <div
      class="flex flex-col items-center justify-between w-full h-full mt-5 mb-2 md:ml-5 md:justify-start md:mt-0 md:flex-row"
    >
      <img class="w-5/12 md:w-2/12" src="../assets/images/logo.png" alt="logo"/>

      <nav
        class="flex flex-col items-center justify-around w-9/12 mb-2 md:mb-0 md:flex-row"
      >
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/series">Séries</RouterLink>
        <RouterLink to="/films">Films</RouterLink>
        <RouterLink to="/search">Rechercher</RouterLink>

      </nav>
    </div>
   
  </header>

  <RouterView />
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isOpen: false
    };
  }
};  
</script>