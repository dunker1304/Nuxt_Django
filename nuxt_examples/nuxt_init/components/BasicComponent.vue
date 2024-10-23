<!-- -| components/
---| base/
-----| foo/
-------| Button.vue -->

<!-- <BaseFooButton /> -->


<!-- nuxt.config.ts -->
<!-- export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false, // [!code ++]
    },
  ],
}); -->


<script setup>
  const foo = useFoo()
  const show = ref(false)

  const counter = ref(0); // executes in server and client environments

  const handleClick = () => {
    counter.value++; // executes only in a client environment
  };
</script>

<template>
  <div class="container">
    <div class="dunk">
      {{  foo }}
    </div>
    <div class="dynamic">
      <h1>Mountains</h1>
      <!-- why need Lazy tag here, v-if vs v-show -->
      <LazyMountainsList v-if="show" />
      <button v-if="!show" @click="show = true">Show List</button>
    </div>
    <div class="counter">
      <p>Count: {{ counter }}</p>
      <button @click="handleClick">Increment</button>
    </div>
  </div>
</template>