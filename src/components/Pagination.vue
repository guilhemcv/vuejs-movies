<template>
    <div class="pb-10">
    <nav class="flex justify-center" aria-label="Page navigation example">
      <ul class="inline-flex -space-x-px">
        <li>
          <p
            @click="forceUpdate(1)"
            class="px-3 py-2 leading-tight text-gray-200 bg-white border border-gray-300 cursor-pointer c hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700"
          >
            1
          </p>
        </li>
        <li>
          <p
            @click="forceUpdate(2)"
            class="px-3 py-2 leading-tight text-gray-200 bg-white border border-gray-300 cursor-pointer c hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700"
          >
            2
          </p>
        </li>
        <li>
          <p
            @click="forceUpdate(3)"
            aria-current="page"
            class="px-3 py-2 leading-tight text-gray-200 bg-white border border-gray-300 cursor-pointer c hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700"
          >
            3
          </p>
        </li>
        <li>
          <p
            @click="forceUpdate(4)"
            class="px-3 py-2 leading-tight text-gray-200 bg-white border border-gray-300 cursor-pointer c hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700"
          >
            4
          </p>
        </li>
        <li>
          <p
            @click="forceUpdate(5)"
            class="px-3 py-2 leading-tight text-gray-200 bg-white border border-gray-300 cursor-pointer c hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700"
          >
            5
          </p>
        </li>
      </ul>
    </nav>
    </div>
</template>

  <script>
  export default {
    name: 'Pagination',
    methods: {
      forceUpdate(number) {
        this.$emit('update', number);
      },
    },
  }
</script>