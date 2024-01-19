
<script setup>

const route = useRoute()

const { data: product } = await useFetch(`http://localhost:3000/products/${route.params.slug}`)

</script>

<template>
  <div class="bg-white">
    Тачка {{ product}}
  </div>
</template>
