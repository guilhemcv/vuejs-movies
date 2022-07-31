<template>
  <footer
    class="fixed bottom-0 left-0 flex flex-col-reverse items-center justify-around w-full h-20 mt-auto text-sm font-bold text-white bg-gris md:justify-between md:flex-row md:h-12"
  >
    <p class="text-xs text-white md:ml-10 md:text-sm">Copyright 2022 - Guilhem SEYVET</p>
    <div class="flex items-center justify-around w-24 md:mr-10">
      <a href="https://www.linkedin.com/in/guilhem-seyvet/" target="_blank">
        <img
          width="25"
          src="../assets/images/logo-linkedin.png"
          alt="linkedin"
        />
      </a>
      <a href="https://www.github.com/guilhemcv/" target="_blank">
        <img width="25" src="../assets/images/logo-github.png" alt="github" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
